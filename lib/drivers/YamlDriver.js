'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Driver2 = require('./Driver');

var _Driver3 = _interopRequireDefault(_Driver2);

var _yamljs = require('yamljs');

var _yamljs2 = _interopRequireDefault(_yamljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YamlDriver = function (_Driver) {
  _inherits(YamlDriver, _Driver);

  function YamlDriver(filename) {
    _classCallCheck(this, YamlDriver);

    var _this = _possibleConstructorReturn(this, (YamlDriver.__proto__ || Object.getPrototypeOf(YamlDriver)).call(this));

    _this.filename = filename;
    try {
      _this.config = _yamljs2.default.load(_this.filename);
    } catch (e) {
      throw new Error('Unable to create Driver. Source file is not a valid yaml or it is not readable.');
    }
    return _this;
  }

  return YamlDriver;
}(_Driver3.default);

exports.default = YamlDriver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcml2ZXJzL1lhbWxEcml2ZXIuanMiXSwibmFtZXMiOlsiWWFtbERyaXZlciIsImZpbGVuYW1lIiwiY29uZmlnIiwibG9hZCIsImUiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFU7OztBQUNKLHNCQUFhQyxRQUFiLEVBQXVCO0FBQUE7O0FBQUE7O0FBRXJCLFVBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsUUFBSTtBQUNGLFlBQUtDLE1BQUwsR0FBYyxpQkFBT0MsSUFBUCxDQUFZLE1BQUtGLFFBQWpCLENBQWQ7QUFDRCxLQUZELENBRUUsT0FBT0csQ0FBUCxFQUFVO0FBQ1YsWUFBTSxJQUFJQyxLQUFKLENBQVUsaUZBQVYsQ0FBTjtBQUNEO0FBUG9CO0FBUXRCOzs7OztrQkFHWUwsVSIsImZpbGUiOiJZYW1sRHJpdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyaXZlciBmcm9tICcuL0RyaXZlcidcbmltcG9ydCB5YW1sanMgZnJvbSAneWFtbGpzJ1xuXG5jbGFzcyBZYW1sRHJpdmVyIGV4dGVuZHMgRHJpdmVyIHtcbiAgY29uc3RydWN0b3IgKGZpbGVuYW1lKSB7XG4gICAgc3VwZXIgKClcbiAgICB0aGlzLmZpbGVuYW1lID0gZmlsZW5hbWVcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb25maWcgPSB5YW1sanMubG9hZCh0aGlzLmZpbGVuYW1lKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGNyZWF0ZSBEcml2ZXIuIFNvdXJjZSBmaWxlIGlzIG5vdCBhIHZhbGlkIHlhbWwgb3IgaXQgaXMgbm90IHJlYWRhYmxlLicpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFlhbWxEcml2ZXJcbiJdfQ==