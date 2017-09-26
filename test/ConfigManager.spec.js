import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import ConfigManager from '../src/ConfigManager'
import ObjectDriver from '../src/drivers/ObjectDriver'

describe('ConfigManager', () => {
  it('should add sources', () => {
    const cm = new ConfigManager()
    const source = new ObjectDriver({ myField: 'foo' })

    expect(cm.getSources()).to.have.lengthOf(0)
    cm.useSource(source)
    expect(cm.getSources()).to.have.lengthOf(1)
  })
  it('should use sources to resolve a config', () => {
    const cm = new ConfigManager()
    const source = new ObjectDriver({ myField: 'foo' })
    sinon.spy(source, 'get')

    cm.useSource(source)

    const res = cm.get('myField')

    expect(res).to.equal('foo')
    expect(source.get).to.have.been.called
  })
  it('should cascade up through sources bottom to top', () => {
    const cm = new ConfigManager()
    const source1 = new ObjectDriver({ myField: 'foo' })
    sinon.spy(source1, 'get')
    cm.useSource(source1)
    const source2 = new ObjectDriver({})
    sinon.spy(source2, 'get')
    cm.useSource(source2)
    const source3 = new ObjectDriver({})
    sinon.spy(source3, 'get')
    cm.useSource(source3)

    const res = cm.get('myField')

    expect(res).to.equal('foo')
    expect(source1.get).to.have.been.called
    expect(source2.get).to.have.been.called
    expect(source3.get).to.have.been.called
  })
  it('should fallback to defaultValue when passed', () => {
    const cm = new ConfigManager()
    const source = new ObjectDriver({ myField: 'foo' })
    sinon.spy(source, 'get')

    cm.useSource(source)

    const res = cm.get('myOtherField', 'bar')

    expect(res).to.equal('bar')
    expect(source.get).to.have.been.called
  })
})
