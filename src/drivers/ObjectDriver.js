import Driver from './Driver'

class ObjectDriver extends Driver {
  constructor (object) {
    super ()
    this.config = object
  }
}

export default ObjectDriver
