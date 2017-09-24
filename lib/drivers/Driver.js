'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Driver = function () {
  function Driver() {
    _classCallCheck(this, Driver);
  }

  _createClass(Driver, [{
    key: 'get',
    value: function get(path, defaultValue) {
      throw new Error('All drivers must implement their own get function.');
    }
  }]);

  return Driver;
}();

exports.default = Driver;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kcml2ZXJzL0RyaXZlci5qcyJdLCJuYW1lcyI6WyJEcml2ZXIiLCJwYXRoIiwiZGVmYXVsdFZhbHVlIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7Ozs7Ozt3QkFDQ0MsSSxFQUFNQyxZLEVBQWM7QUFDdkIsWUFBTSxJQUFJQyxLQUFKLENBQVUsb0RBQVYsQ0FBTjtBQUNEOzs7Ozs7a0JBR1lILE0iLCJmaWxlIjoiRHJpdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRHJpdmVyIHtcbiAgZ2V0IChwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FsbCBkcml2ZXJzIG11c3QgaW1wbGVtZW50IHRoZWlyIG93biBnZXQgZnVuY3Rpb24uJylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcml2ZXJcbiJdfQ==