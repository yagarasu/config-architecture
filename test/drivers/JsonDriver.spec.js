import { expect } from 'chai'
import path from 'path'

import JsonDriver from '../../src/drivers/JsonDriver'

describe('JsonDriver', () => {
  it('should be created when file is readable', () => {
    const driver = new JsonDriver(path.join(__dirname, 'JsonDriverData.json'))
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
