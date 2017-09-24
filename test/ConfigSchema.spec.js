import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import ConfigSchema from '../src/ConfigSchema'

describe('ConfigSchema', () => {

  const getMockConfigManager = (response) => ({ get: sinon.stub().returns(response) })

  describe('Schema creation', () => {
    it('should create complex schemas', () => {
      const schema = new ConfigSchema({
        string: 'string',
        number: 'number',
        boolean: 'boolean',
        array: 'Array',
        nested: {
          otherString: 'string',
          otherNumber: 'number',
          deep: {
            otherOtherString: 'string',
            further: {
              lastString: 'string'
            }
          }
        }
      })

      expect(schema._schema).to.have.property('string')
      expect(schema._schema).to.have.property('number')
      expect(schema._schema).to.have.property('boolean')
      expect(schema._schema).to.have.property('array')
      expect(schema._schema).to.have.property('nested.otherString')
      expect(schema._schema).to.have.property('nested.otherNumber')
      expect(schema._schema).to.have.property('nested.deep.otherOtherString')
      expect(schema._schema).to.have.property('nested.deep.further.lastString')
    })
  })

  it('should validate specific paths', () => {
    const mock = getMockConfigManager('a string')
    const schema = new ConfigSchema({
      myField: 'string',
      myOtherField: 'number'
    })

    const res = schema.validate(mock, 'myField')

    expect(res).to.be.true
    expect(schema.lastErrors).to.be.null
    expect(mock.get).to.have.been.calledWith('myField')
  })

  describe('Per style', () => {
    it('should allow shorthand: {field: \'string\'}', () => {
      const mock = getMockConfigManager('a string')
      const schema = new ConfigSchema({ myField: 'string' })
      const res = schema.validate(mock)

      expect(res).to.be.true
      expect(schema.lastErrors).to.be.null
      expect(mock.get).to.have.been.calledWith('myField')
    })
    it('should allow \'type\': {field: {type: \'string\'}}', () => {
      const mock = getMockConfigManager('a string')
      const schema = new ConfigSchema({ myField: {type: 'string'} })
      const res = schema.validate(mock)

      expect(res).to.be.true
      expect(schema.lastErrors).to.be.null
      expect(mock.get).to.have.been.calledWith('myField')
    })
  })

  describe('Per type', () => {
    it('should validate String fields: Valid', () => {
      const mock = getMockConfigManager('a string')
      const schema = new ConfigSchema({ myField: 'string' })
      const res = schema.validate(mock)

      expect(res).to.be.true
      expect(schema.lastErrors).to.be.null
      expect(mock.get).to.have.been.calledWith('myField')
    })
    it('should validate String fields: Invalid', () => {
      const mock = getMockConfigManager(10)
      const schema = new ConfigSchema({ myField: 'string' })
      const res = schema.validate(mock)

      expect(res).to.be.false
      expect(schema.lastErrors).to.be.an('array').and.to.have.lengthOf(1)
      expect(mock.get).to.have.been.calledWith('myField')
    })
    it('should validate Number fields: Valid', () => {
      const mock = getMockConfigManager(10)
      const schema = new ConfigSchema({ myField: 'number' })
      const res = schema.validate(mock)

      expect(res).to.be.true
      expect(schema.lastErrors).to.be.null
      expect(mock.get).to.have.been.calledWith('myField')
    })
    it('should validate Number fields: Invalid', () => {
      const mock = getMockConfigManager('12')
      const schema = new ConfigSchema({ myField: 'number' })
      const res = schema.validate(mock)

      expect(res).to.be.false
      expect(schema.lastErrors).to.be.an('array').and.to.have.lengthOf(1)
      expect(mock.get).to.have.been.calledWith('myField')
    })
    it('should validate Boolean fields: Valid', () => {
      const mock = getMockConfigManager(true)
      const schema = new ConfigSchema({ myField: 'boolean' })
      const res = schema.validate(mock)

      expect(res).to.be.true
      expect(schema.lastErrors).to.be.null
      expect(mock.get).to.have.been.calledWith('myField')
    })
    it('should validate Boolean fields: Invalid', () => {
      const mock = getMockConfigManager(10)
      const schema = new ConfigSchema({ myField: 'boolean' })
      const res = schema.validate(mock)

      expect(res).to.be.false
      expect(schema.lastErrors).to.be.an('array').and.to.have.lengthOf(1)
      expect(mock.get).to.have.been.calledWith('myField')
    })
    it('should validate Array fields: Valid', () => {
      const mock = getMockConfigManager(['Foo'])
      const schema = new ConfigSchema({ myField: 'Array' })
      const res = schema.validate(mock)

      expect(res).to.be.true
      expect(schema.lastErrors).to.be.null
      expect(mock.get).to.have.been.calledWith('myField')
    })
    it('should validate Array fields: Invalid', () => {
      const mock = getMockConfigManager(10)
      const schema = new ConfigSchema({ myField: 'Array' })
      const res = schema.validate(mock)

      expect(res).to.be.false
      expect(schema.lastErrors).to.be.an('array').and.to.have.lengthOf(1)
      expect(mock.get).to.have.been.calledWith('myField')
    })
    it('should validate nested fields: Valid', () => {
      const mock = getMockConfigManager('Foo')
      const schema = new ConfigSchema({ myField: { nested: 'string'} })
      const res = schema.validate(mock)

      expect(res).to.be.true
      expect(schema.lastErrors).to.be.null
      expect(mock.get).to.have.been.calledWith('myField.nested')
    })
    it('should validate nested fields: Invalid', () => {
      const mock = getMockConfigManager(10)
      const schema = new ConfigSchema({ myField: { nested: 'string'} })
      const res = schema.validate(mock)

      expect(res).to.be.false
      expect(schema.lastErrors).to.be.an('array').and.to.have.lengthOf(1)
      expect(mock.get).to.have.been.calledWith('myField.nested')
    })
  })

  describe('Custom validators', () => {
    it('should allow custom validators', () => {
      const mock = getMockConfigManager('some string')
      const validator = (value, expect) => {
        expect(value).to.match(/^will fail/)
      }
      const validatorSpy = sinon.spy(validator)
      const schema = new ConfigSchema({
        myField: {
          type: 'string',
          validator: validatorSpy
        }
      })
      const res = schema.validate(mock)

      expect(res).to.be.false
      expect(schema.lastErrors).to.be.an('array')
        .and.to.have.lengthOf(1)
      expect(validatorSpy).to.have.been.called
      expect(mock.get).to.have.been.calledWith('myField')
    })
  })
})
