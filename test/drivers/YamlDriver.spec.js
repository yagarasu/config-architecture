import { expect } from 'chai'
import path from 'path'

import YamlDriver from '../../src/drivers/YamlDriver'

describe('YamlDriver', () => {
  it('should be created when file is readable', () => {
    const fn = () => {
      const driver = new YamlDriver(path.join(__dirname, 'YamlDriverData.yaml'))
    }
    expect(fn).not.to.throw()
  })
  it('should throw when file is not readable', () => {
    const fn = () => {
      const driver = new YamlDriver(path.join(__dirname, 'YamlDriverData.this.doesnt.exists.yaml'))
    }
    expect(fn).to.throw(Error, /not readable/)
  })
  it('should throw when file is not valid', () => {
    const fn = () => {
      const driver = new YamlDriver(path.join(__dirname, 'YamlDriverData.invalid.yaml'))
    }
    expect(fn).to.throw(Error, /Unable to create Driver/)
  })
  it('should get root paths', () => {
    const driver = new YamlDriver(path.join(__dirname, 'YamlDriverData.yaml'))
    const value = driver.get('string')

    expect(value).to.be.a('string').and.equal('a string')
  })
  it('should get nested paths', () => {
    const driver = new YamlDriver(path.join(__dirname, 'YamlDriverData.yaml'))
    const value = driver.get('nested.deep.further.lastString')

    expect(value).to.be.a('string').and.equal('last string')
  })
})
