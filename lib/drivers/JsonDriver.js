'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Driver2 = require('./Driver');

var _Driver3 = _interopRequireDefault(_Driver2);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JsonDriver = function (_Driver) {
  _inherits(JsonDriver, _Driver);

  function JsonDriver(filename) {
    _classCallCheck(this, JsonDriver);

    var _this = _possibleConstructorReturn(this, (JsonDriver.__proto__ || Object.getPrototypeOf(JsonDriver)).call(this));

    _this.filename = filename;
    var cont = _fs2.default.readFileSync(_this.filename, { encoding: 'utf8' });
    cont = _this.removeComments(cont);
    try {
      _this.config = JSON.parse(cont);
    } catch (e) {
      throw new Error('Unable to create Driver. Source file is not a valid json.');
    }
    return _this;
  }

  _createClass(JsonDriver, [{
    key: 'removeComments',
    value: function removeComments(input) {
      //return input.replace(/\/\/[^\n\r]*/, '')
      return input;
    }
  }]);

  return JsonDriver;
}(_Driver3.default);

exports.default = JsonDriver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcml2ZXJzL0pzb25Ecml2ZXIuanMiXSwibmFtZXMiOlsiSnNvbkRyaXZlciIsImZpbGVuYW1lIiwiY29udCIsInJlYWRGaWxlU3luYyIsImVuY29kaW5nIiwicmVtb3ZlQ29tbWVudHMiLCJjb25maWciLCJKU09OIiwicGFyc2UiLCJlIiwiRXJyb3IiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTs7O0FBQ0osc0JBQWFDLFFBQWIsRUFBdUI7QUFBQTs7QUFBQTs7QUFFckIsVUFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxRQUFJQyxPQUFPLGFBQUdDLFlBQUgsQ0FBZ0IsTUFBS0YsUUFBckIsRUFBK0IsRUFBRUcsVUFBVSxNQUFaLEVBQS9CLENBQVg7QUFDQUYsV0FBTyxNQUFLRyxjQUFMLENBQW9CSCxJQUFwQixDQUFQO0FBQ0EsUUFBSTtBQUNGLFlBQUtJLE1BQUwsR0FBY0MsS0FBS0MsS0FBTCxDQUFXTixJQUFYLENBQWQ7QUFDRCxLQUZELENBRUUsT0FBT08sQ0FBUCxFQUFVO0FBQ1YsWUFBTSxJQUFJQyxLQUFKLENBQVUsMkRBQVYsQ0FBTjtBQUNEO0FBVG9CO0FBVXRCOzs7O21DQUVlQyxLLEVBQU87QUFDckI7QUFDQSxhQUFPQSxLQUFQO0FBQ0Q7Ozs7OztrQkFHWVgsVSIsImZpbGUiOiJKc29uRHJpdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyaXZlciBmcm9tICcuL0RyaXZlcidcbmltcG9ydCBmcyBmcm9tICdmcydcblxuY2xhc3MgSnNvbkRyaXZlciBleHRlbmRzIERyaXZlciB7XG4gIGNvbnN0cnVjdG9yIChmaWxlbmFtZSkge1xuICAgIHN1cGVyICgpXG4gICAgdGhpcy5maWxlbmFtZSA9IGZpbGVuYW1lXG4gICAgbGV0IGNvbnQgPSBmcy5yZWFkRmlsZVN5bmModGhpcy5maWxlbmFtZSwgeyBlbmNvZGluZzogJ3V0ZjgnIH0pXG4gICAgY29udCA9IHRoaXMucmVtb3ZlQ29tbWVudHMoY29udClcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb25maWcgPSBKU09OLnBhcnNlKGNvbnQpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gY3JlYXRlIERyaXZlci4gU291cmNlIGZpbGUgaXMgbm90IGEgdmFsaWQganNvbi4nKVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUNvbW1lbnRzIChpbnB1dCkge1xuICAgIC8vcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcL1xcL1teXFxuXFxyXSovLCAnJylcbiAgICByZXR1cm4gaW5wdXRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKc29uRHJpdmVyXG4iXX0=