import _get from 'lodash/get'

class Driver {
  get (path) {
    return _get(this.config, path)
  }
}

export default Driver
