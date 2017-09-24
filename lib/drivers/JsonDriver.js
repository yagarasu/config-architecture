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
    _this.config = JSON.parse(cont);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcml2ZXJzL0pzb25Ecml2ZXIuanMiXSwibmFtZXMiOlsiSnNvbkRyaXZlciIsImZpbGVuYW1lIiwiY29udCIsInJlYWRGaWxlU3luYyIsImVuY29kaW5nIiwicmVtb3ZlQ29tbWVudHMiLCJjb25maWciLCJKU09OIiwicGFyc2UiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTs7O0FBQ0osc0JBQWFDLFFBQWIsRUFBdUI7QUFBQTs7QUFBQTs7QUFFckIsVUFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxRQUFJQyxPQUFPLGFBQUdDLFlBQUgsQ0FBZ0IsTUFBS0YsUUFBckIsRUFBK0IsRUFBRUcsVUFBVSxNQUFaLEVBQS9CLENBQVg7QUFDQUYsV0FBTyxNQUFLRyxjQUFMLENBQW9CSCxJQUFwQixDQUFQO0FBQ0EsVUFBS0ksTUFBTCxHQUFjQyxLQUFLQyxLQUFMLENBQVdOLElBQVgsQ0FBZDtBQUxxQjtBQU10Qjs7OzttQ0FFZU8sSyxFQUFPO0FBQ3JCO0FBQ0EsYUFBT0EsS0FBUDtBQUNEOzs7Ozs7a0JBR1lULFUiLCJmaWxlIjoiSnNvbkRyaXZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcml2ZXIgZnJvbSAnLi9Ecml2ZXInXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmNsYXNzIEpzb25Ecml2ZXIgZXh0ZW5kcyBEcml2ZXIge1xuICBjb25zdHJ1Y3RvciAoZmlsZW5hbWUpIHtcbiAgICBzdXBlciAoKVxuICAgIHRoaXMuZmlsZW5hbWUgPSBmaWxlbmFtZVxuICAgIGxldCBjb250ID0gZnMucmVhZEZpbGVTeW5jKHRoaXMuZmlsZW5hbWUsIHsgZW5jb2Rpbmc6ICd1dGY4JyB9KVxuICAgIGNvbnQgPSB0aGlzLnJlbW92ZUNvbW1lbnRzKGNvbnQpXG4gICAgdGhpcy5jb25maWcgPSBKU09OLnBhcnNlKGNvbnQpXG4gIH1cblxuICByZW1vdmVDb21tZW50cyAoaW5wdXQpIHtcbiAgICAvL3JldHVybiBpbnB1dC5yZXBsYWNlKC9cXC9cXC9bXlxcblxccl0qLywgJycpXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSnNvbkRyaXZlclxuIl19