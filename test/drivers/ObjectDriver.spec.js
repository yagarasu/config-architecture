import { expect } from 'chai'

import ObjectDriver from '../../src/drivers/ObjectDriver'

const data = {
  "string": "a string",
  "number": 10,
  "boolean": true,
  "array": ["foo", "bar"],
  "nested": {
    "otherString": "string",
    "otherNumber": 10,
    "deep": {
      "otherOtherString": "string",
      "further": {
        "lastString": "last string"
      }
    }
  }
}

describe('ObjectDriver', () => {
  it('should be created when data is object', () => {
    const fn = () => {
      const driver = new ObjectDriver(data)
    }
    expect(fn).not.to.throw()
  })
  it('should throw when data is not an object', () => {
    const fn = () => {
      const driver = new ObjectDriver(false)
    }
    expect(fn).to.throw(Error, /Unable to create Driver/)
  })
  it('should get root paths', () => {
    const driver = new ObjectDriver(data)
    const value = driver.get('string')

    expect(value).to.be.a('string').and.equal('a string')
  })
  it('should get nested paths', () => {
    const driver = new ObjectDriver(data)
    const value = driver.get('nested.deep.further.lastString')

    expect(value).to.be.a('string').and.equal('last string')
  })
})
