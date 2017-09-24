import Driver from './Driver'
import typeDetect from 'type-detect'

class ObjectDriver extends Driver {
  constructor (object) {
    super ()
    if (typeDetect(object) !== 'Object') throw new Error('Unable to create Driver. Source object is not a valid object.')
    this.config = object
  }
}

export default ObjectDriver
