'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Driver = function () {
  function Driver() {
    _classCallCheck(this, Driver);
  }

  _createClass(Driver, [{
    key: 'get',
    value: function get(path) {
      return (0, _get3.default)(this.config, path);
    }
  }]);

  return Driver;
}();

exports.default = Driver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcml2ZXJzL0RyaXZlci5qcyJdLCJuYW1lcyI6WyJEcml2ZXIiLCJwYXRoIiwiY29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztJQUVNQSxNOzs7Ozs7O3dCQUNDQyxJLEVBQU07QUFDVCxhQUFPLG1CQUFLLEtBQUtDLE1BQVYsRUFBa0JELElBQWxCLENBQVA7QUFDRDs7Ozs7O2tCQUdZRCxNIiwiZmlsZSI6IkRyaXZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZ2V0IGZyb20gJ2xvZGFzaC9nZXQnXG5cbmNsYXNzIERyaXZlciB7XG4gIGdldCAocGF0aCkge1xuICAgIHJldHVybiBfZ2V0KHRoaXMuY29uZmlnLCBwYXRoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyaXZlclxuIl19