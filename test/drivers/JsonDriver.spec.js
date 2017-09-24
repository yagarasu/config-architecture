import { expect } from 'chai'
import path from 'path'

import JsonDriver from '../../src/drivers/JsonDriver'

describe('JsonDriver', () => {
  it('should be created when file is readable', () => {
    const fn = () => {
      const driver = new JsonDriver(path.join(__dirname, 'JsonDriverData.json'))
    }
    expect(fn).not.to.throw()
  })
  it('should throw when file is not readable', () => {
    const fn = () => {
      const driver = new JsonDriver(path.join(__dirname, 'JsonDriverData.this.doesnt.exists.json'))
    }
    expect(fn).to.throw(Error, /ENOENT/)
  })
  it('should throw when file is not valid', () => {
    const fn = () => {
      const driver = new JsonDriver(path.join(__dirname, 'JsonDriverData.invalid.json'))
    }
    expect(fn).to.throw(Error, /Unable to create Driver/)
  })
  it('should get root paths', () => {
    const driver = new JsonDriver(path.join(__dirname, 'JsonDriverData.json'))
    const value = driver.get('string')

    expect(value).to.be.a('string').and.equal('a string')
  })
  it('should get nested paths', () => {
    const driver = new JsonDriver(path.join(__dirname, 'JsonDriverData.json'))
    const value = driver.get('nested.deep.further.lastString')

    expect(value).to.be.a('string').and.equal('last string')
  })
})
