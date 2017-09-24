'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Driver2 = require('./Driver');

var _Driver3 = _interopRequireDefault(_Driver2);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

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
    _this.config = JSON.parse(cont);
    return _this;
  }

  _createClass(JsonDriver, [{
    key: 'get',
    value: function get(path) {
      return (0, _get3.default)(this.config, path);
    }
  }, {
    key: 'removeComments',
    value: function removeComments(input) {
      //return input.replace(/\/\/[^\n\r]*/, '')
      return input;
    }
  }]);

  return JsonDriver;
}(_Driver3.default);

exports.default = JsonDriver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcml2ZXJzL0pzb25Ecml2ZXIuanMiXSwibmFtZXMiOlsiSnNvbkRyaXZlciIsImZpbGVuYW1lIiwiY29udCIsInJlYWRGaWxlU3luYyIsImVuY29kaW5nIiwicmVtb3ZlQ29tbWVudHMiLCJjb25maWciLCJKU09OIiwicGFyc2UiLCJwYXRoIiwiaW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTs7O0FBQ0osc0JBQWFDLFFBQWIsRUFBdUI7QUFBQTs7QUFBQTs7QUFFckIsVUFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxRQUFJQyxPQUFPLGFBQUdDLFlBQUgsQ0FBZ0IsTUFBS0YsUUFBckIsRUFBK0IsRUFBRUcsVUFBVSxNQUFaLEVBQS9CLENBQVg7QUFDQUYsV0FBTyxNQUFLRyxjQUFMLENBQW9CSCxJQUFwQixDQUFQO0FBQ0EsVUFBS0ksTUFBTCxHQUFjQyxLQUFLQyxLQUFMLENBQVdOLElBQVgsQ0FBZDtBQUxxQjtBQU10Qjs7Ozt3QkFFSU8sSSxFQUFNO0FBQ1QsYUFBTyxtQkFBSyxLQUFLSCxNQUFWLEVBQWtCRyxJQUFsQixDQUFQO0FBQ0Q7OzttQ0FFZUMsSyxFQUFPO0FBQ3JCO0FBQ0EsYUFBT0EsS0FBUDtBQUNEOzs7Ozs7a0JBR1lWLFUiLCJmaWxlIjoiSnNvbkRyaXZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcml2ZXIgZnJvbSAnLi9Ecml2ZXInXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgX2dldCBmcm9tICdsb2Rhc2gvZ2V0J1xuXG5jbGFzcyBKc29uRHJpdmVyIGV4dGVuZHMgRHJpdmVyIHtcbiAgY29uc3RydWN0b3IgKGZpbGVuYW1lKSB7XG4gICAgc3VwZXIgKClcbiAgICB0aGlzLmZpbGVuYW1lID0gZmlsZW5hbWVcbiAgICBsZXQgY29udCA9IGZzLnJlYWRGaWxlU3luYyh0aGlzLmZpbGVuYW1lLCB7IGVuY29kaW5nOiAndXRmOCcgfSlcbiAgICBjb250ID0gdGhpcy5yZW1vdmVDb21tZW50cyhjb250KVxuICAgIHRoaXMuY29uZmlnID0gSlNPTi5wYXJzZShjb250KVxuICB9XG5cbiAgZ2V0IChwYXRoKSB7XG4gICAgcmV0dXJuIF9nZXQodGhpcy5jb25maWcsIHBhdGgpXG4gIH1cblxuICByZW1vdmVDb21tZW50cyAoaW5wdXQpIHtcbiAgICAvL3JldHVybiBpbnB1dC5yZXBsYWNlKC9cXC9cXC9bXlxcblxccl0qLywgJycpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSnNvbkRyaXZlclxuIl19