class Config {
  constructor () {
    this._sources = []
    this._schema = null
  }
  get (path, defaultValue) {
    for (let i = this._sources.length - 1; i >= 0; i--) {
      const curSource = this._sources[i]
      const value = curSource.get(path)
      if (value !== undefined) return value
    }
    return defaultValue
  }
  addSource (source) {
    this._sources.push(source)
    return this
  }
  schema (schema) {
    this._schema = schema
    return this
  }
  validate () {
    if (!this._schema) throw new Error('Can not validate without a schema.')
    return this._schema.validate(this)
  }
}

export default Config