import { expect } from 'chai'
import typeDetect from 'type-detect'

class ConfigSchema {
  constructor (schemaObject) {
    this._schema = this.buildSchema(schemaObject)
    this.lastErrors = null
  }

  isNested (obj) {
    return (typeDetect(obj) === 'Object' && !obj.type)
  }

  createDescriptor (obj) {
    let type = obj
    type = (typeDetect(obj) === 'Object' && obj.type) ? obj.type : type
    const validators = (typeDetect(obj) === 'Object' && obj.validator)
      ? [(value, expect) => expect(value).to.be.a(type), obj.validator]
      : [(value, expect) => expect(value).to.be.a(type)]
    if (typeDetect(obj) === 'Array' && obj.length > 0) {
      // @TODO: Create logic for typed arrays. Eg: ['string']
    }
    return {
      type,
      validators
    }
  }

  buildSchema (schemaObject) {
    const schema = {}
    const parse = (obj, path) => {
      for (let key in obj) {
        const fullPath = (path) ? `${path}.${key}` : key
        const rightHand = obj[key]
        if (this.isNested(rightHand)) {
          parse(rightHand, fullPath)
        } else {
          schema[fullPath] = this.createDescriptor(rightHand)
        }
      }
    }
    parse(schemaObject)
    return schema
  }

  validate (ConfigManager, specificPath) {
    this.lastErrors = null
    const errs = []
    const keys = (!specificPath)
      ? Object.keys(this._schema)
      : [specificPath]
    keys.forEach((path) => {
      const desc = this._schema[path]
      desc.validators.forEach((validator) => {
        try {
          validator(ConfigManager.get(path), expect)
        } catch (e) {
          errs.push(e.message)
        }
      })
    })
    if (errs.length === 0) return true
    this.lastErrors = errs
    return false
  }
}

export default ConfigSchema
