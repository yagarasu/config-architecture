'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Driver2 = require('./Driver');

var _Driver3 = _interopRequireDefault(_Driver2);

var _typeDetect = require('type-detect');

var _typeDetect2 = _interopRequireDefault(_typeDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectDriver = function (_Driver) {
  _inherits(ObjectDriver, _Driver);

  function ObjectDriver(object) {
    _classCallCheck(this, ObjectDriver);

    var _this = _possibleConstructorReturn(this, (ObjectDriver.__proto__ || Object.getPrototypeOf(ObjectDriver)).call(this));

    if ((0, _typeDetect2.default)(object) !== 'Object') throw new Error('Unable to create Driver. Source object is not a valid object.');
    _this.config = object;
    return _this;
  }

  return ObjectDriver;
}(_Driver3.default);

exports.default = ObjectDriver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcml2ZXJzL09iamVjdERyaXZlci5qcyJdLCJuYW1lcyI6WyJPYmplY3REcml2ZXIiLCJvYmplY3QiLCJFcnJvciIsImNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFk7OztBQUNKLHdCQUFhQyxNQUFiLEVBQXFCO0FBQUE7O0FBQUE7O0FBRW5CLFFBQUksMEJBQVdBLE1BQVgsTUFBdUIsUUFBM0IsRUFBcUMsTUFBTSxJQUFJQyxLQUFKLENBQVUsK0RBQVYsQ0FBTjtBQUNyQyxVQUFLQyxNQUFMLEdBQWNGLE1BQWQ7QUFIbUI7QUFJcEI7Ozs7O2tCQUdZRCxZIiwiZmlsZSI6Ik9iamVjdERyaXZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcml2ZXIgZnJvbSAnLi9Ecml2ZXInXG5pbXBvcnQgdHlwZURldGVjdCBmcm9tICd0eXBlLWRldGVjdCdcblxuY2xhc3MgT2JqZWN0RHJpdmVyIGV4dGVuZHMgRHJpdmVyIHtcbiAgY29uc3RydWN0b3IgKG9iamVjdCkge1xuICAgIHN1cGVyICgpXG4gICAgaWYgKHR5cGVEZXRlY3Qob2JqZWN0KSAhPT0gJ09iamVjdCcpIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGNyZWF0ZSBEcml2ZXIuIFNvdXJjZSBvYmplY3QgaXMgbm90IGEgdmFsaWQgb2JqZWN0LicpXG4gICAgdGhpcy5jb25maWcgPSBvYmplY3RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3REcml2ZXJcbiJdfQ==