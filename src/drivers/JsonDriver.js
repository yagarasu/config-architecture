import Driver from './Driver'
import fs from 'fs'

class JsonDriver extends Driver {
  constructor (filename) {
    super ()
    this.filename = filename
    let cont = fs.readFileSync(this.filename, { encoding: 'utf8' })
    cont = this.removeComments(cont)
    this.config = JSON.parse(cont)
  }

  removeComments (input) {
    //return input.replace(/\/\/[^\n\r]*/, '')
    return input
  }
}

export default JsonDriver
