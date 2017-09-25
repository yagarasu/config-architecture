import Driver from './Driver'
import yamljs from 'yamljs'

class YamlDriver extends Driver {
  constructor (filename) {
    super ()
    this.filename = filename
    try {
      this.config = yamljs.load(this.filename)
    } catch (e) {
      throw new Error('Unable to create Driver. Source file is not a valid yaml or it is not readable.')
    }
  }
}

export default YamlDriver
