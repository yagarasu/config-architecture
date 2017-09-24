'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Driver2 = require('./Driver');

var _Driver3 = _interopRequireDefault(_Driver2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectDriver = function (_Driver) {
  _inherits(ObjectDriver, _Driver);

  function ObjectDriver(object) {
    _classCallCheck(this, ObjectDriver);

    var _this = _possibleConstructorReturn(this, (ObjectDriver.__proto__ || Object.getPrototypeOf(ObjectDriver)).call(this));

    _this.config = object;
    return _this;
  }

  return ObjectDriver;
}(_Driver3.default);

exports.default = ObjectDriver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcml2ZXJzL09iamVjdERyaXZlci5qcyJdLCJuYW1lcyI6WyJPYmplY3REcml2ZXIiLCJvYmplY3QiLCJjb25maWciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsWTs7O0FBQ0osd0JBQWFDLE1BQWIsRUFBcUI7QUFBQTs7QUFBQTs7QUFFbkIsVUFBS0MsTUFBTCxHQUFjRCxNQUFkO0FBRm1CO0FBR3BCOzs7OztrQkFHWUQsWSIsImZpbGUiOiJPYmplY3REcml2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJpdmVyIGZyb20gJy4vRHJpdmVyJ1xuXG5jbGFzcyBPYmplY3REcml2ZXIgZXh0ZW5kcyBEcml2ZXIge1xuICBjb25zdHJ1Y3RvciAob2JqZWN0KSB7XG4gICAgc3VwZXIgKClcbiAgICB0aGlzLmNvbmZpZyA9IG9iamVjdFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdERyaXZlclxuIl19