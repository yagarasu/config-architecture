'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function () {
  function Config() {
    _classCallCheck(this, Config);

    this._sources = [];
    this._schema = null;
  }

  _createClass(Config, [{
    key: 'get',
    value: function get(path, defaultValue) {
      for (var i = this._sources.length - 1; i >= 0; i--) {
        var curSource = this._sources[i];
        var value = curSource.get(path);
        if (value !== undefined) return value;
      }
      return defaultValue;
    }
  }, {
    key: 'addSource',
    value: function addSource(source) {
      this._sources.push(source);
      return this;
    }
  }, {
    key: 'schema',
    value: function schema(_schema) {
      this._schema = _schema;
      return this;
    }
  }, {
    key: 'validate',
    value: function validate() {
      if (!this._schema) throw new Error('Can not validate without a schema.');
      return this._schema.validate(this);
    }
  }]);

  return Config;
}();

exports.default = Config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db25maWdNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZyIsIl9zb3VyY2VzIiwiX3NjaGVtYSIsInBhdGgiLCJkZWZhdWx0VmFsdWUiLCJpIiwibGVuZ3RoIiwiY3VyU291cmNlIiwidmFsdWUiLCJnZXQiLCJ1bmRlZmluZWQiLCJzb3VyY2UiLCJwdXNoIiwic2NoZW1hIiwiRXJyb3IiLCJ2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNO0FBQ0osb0JBQWU7QUFBQTs7QUFDYixTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLElBQWY7QUFDRDs7Ozt3QkFDSUMsSSxFQUFNQyxZLEVBQWM7QUFDdkIsV0FBSyxJQUFJQyxJQUFJLEtBQUtKLFFBQUwsQ0FBY0ssTUFBZCxHQUF1QixDQUFwQyxFQUF1Q0QsS0FBSyxDQUE1QyxFQUErQ0EsR0FBL0MsRUFBb0Q7QUFDbEQsWUFBTUUsWUFBWSxLQUFLTixRQUFMLENBQWNJLENBQWQsQ0FBbEI7QUFDQSxZQUFNRyxRQUFRRCxVQUFVRSxHQUFWLENBQWNOLElBQWQsQ0FBZDtBQUNBLFlBQUlLLFVBQVVFLFNBQWQsRUFBeUIsT0FBT0YsS0FBUDtBQUMxQjtBQUNELGFBQU9KLFlBQVA7QUFDRDs7OzhCQUNVTyxNLEVBQVE7QUFDakIsV0FBS1YsUUFBTCxDQUFjVyxJQUFkLENBQW1CRCxNQUFuQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7MkJBQ09FLE8sRUFBUTtBQUNkLFdBQUtYLE9BQUwsR0FBZVcsT0FBZjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7K0JBQ1c7QUFDVixVQUFJLENBQUMsS0FBS1gsT0FBVixFQUFtQixNQUFNLElBQUlZLEtBQUosQ0FBVSxvQ0FBVixDQUFOO0FBQ25CLGFBQU8sS0FBS1osT0FBTCxDQUFhYSxRQUFiLENBQXNCLElBQXRCLENBQVA7QUFDRDs7Ozs7O2tCQUdZZixNIiwiZmlsZSI6IkNvbmZpZ01hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb25maWcge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5fc291cmNlcyA9IFtdXG4gICAgdGhpcy5fc2NoZW1hID0gbnVsbFxuICB9XG4gIGdldCAocGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX3NvdXJjZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGN1clNvdXJjZSA9IHRoaXMuX3NvdXJjZXNbaV1cbiAgICAgIGNvbnN0IHZhbHVlID0gY3VyU291cmNlLmdldChwYXRoKVxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIH1cbiAgYWRkU291cmNlIChzb3VyY2UpIHtcbiAgICB0aGlzLl9zb3VyY2VzLnB1c2goc291cmNlKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgc2NoZW1hIChzY2hlbWEpIHtcbiAgICB0aGlzLl9zY2hlbWEgPSBzY2hlbWFcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHZhbGlkYXRlICgpIHtcbiAgICBpZiAoIXRoaXMuX3NjaGVtYSkgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IHZhbGlkYXRlIHdpdGhvdXQgYSBzY2hlbWEuJylcbiAgICByZXR1cm4gdGhpcy5fc2NoZW1hLnZhbGlkYXRlKHRoaXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnXG4iXX0=