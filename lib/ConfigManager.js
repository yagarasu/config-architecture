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
    key: 'useSource',
    value: function useSource(source) {
      this._sources.push(source);
      return this;
    }
  }, {
    key: 'getSources',
    value: function getSources() {
      return this._sources;
    }
  }, {
    key: 'schema',
    value: function schema(_schema) {
      this._schema = _schema;
      return this;
    }
  }, {
    key: 'validate',
    value: function validate(path) {
      if (!this._schema) throw new Error('Can not validate without a schema.');
      return this._schema.validate(this, path);
    }
  }, {
    key: 'validationErrors',
    value: function validationErrors() {
      if (!this._schema) throw new Error('Can not validate without a schema.');
      return this._schema.lastErrors;
    }
  }]);

  return Config;
}();

exports.default = Config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db25maWdNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZyIsIl9zb3VyY2VzIiwiX3NjaGVtYSIsInBhdGgiLCJkZWZhdWx0VmFsdWUiLCJpIiwibGVuZ3RoIiwiY3VyU291cmNlIiwidmFsdWUiLCJnZXQiLCJ1bmRlZmluZWQiLCJzb3VyY2UiLCJwdXNoIiwic2NoZW1hIiwiRXJyb3IiLCJ2YWxpZGF0ZSIsImxhc3RFcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTtBQUNKLG9CQUFlO0FBQUE7O0FBQ2IsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0Q7Ozs7d0JBQ0lDLEksRUFBTUMsWSxFQUFjO0FBQ3ZCLFdBQUssSUFBSUMsSUFBSSxLQUFLSixRQUFMLENBQWNLLE1BQWQsR0FBdUIsQ0FBcEMsRUFBdUNELEtBQUssQ0FBNUMsRUFBK0NBLEdBQS9DLEVBQW9EO0FBQ2xELFlBQU1FLFlBQVksS0FBS04sUUFBTCxDQUFjSSxDQUFkLENBQWxCO0FBQ0EsWUFBTUcsUUFBUUQsVUFBVUUsR0FBVixDQUFjTixJQUFkLENBQWQ7QUFDQSxZQUFJSyxVQUFVRSxTQUFkLEVBQXlCLE9BQU9GLEtBQVA7QUFDMUI7QUFDRCxhQUFPSixZQUFQO0FBQ0Q7Ozs4QkFDVU8sTSxFQUFRO0FBQ2pCLFdBQUtWLFFBQUwsQ0FBY1csSUFBZCxDQUFtQkQsTUFBbkI7QUFDQSxhQUFPLElBQVA7QUFDRDs7O2lDQUNhO0FBQ1osYUFBTyxLQUFLVixRQUFaO0FBQ0Q7OzsyQkFDT1ksTyxFQUFRO0FBQ2QsV0FBS1gsT0FBTCxHQUFlVyxPQUFmO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozs2QkFDU1YsSSxFQUFNO0FBQ2QsVUFBSSxDQUFDLEtBQUtELE9BQVYsRUFBbUIsTUFBTSxJQUFJWSxLQUFKLENBQVUsb0NBQVYsQ0FBTjtBQUNuQixhQUFPLEtBQUtaLE9BQUwsQ0FBYWEsUUFBYixDQUFzQixJQUF0QixFQUE0QlosSUFBNUIsQ0FBUDtBQUNEOzs7dUNBQ21CO0FBQ2xCLFVBQUksQ0FBQyxLQUFLRCxPQUFWLEVBQW1CLE1BQU0sSUFBSVksS0FBSixDQUFVLG9DQUFWLENBQU47QUFDbkIsYUFBTyxLQUFLWixPQUFMLENBQWFjLFVBQXBCO0FBQ0Q7Ozs7OztrQkFHWWhCLE0iLCJmaWxlIjoiQ29uZmlnTWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9zb3VyY2VzID0gW11cbiAgICB0aGlzLl9zY2hlbWEgPSBudWxsXG4gIH1cbiAgZ2V0IChwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5fc291cmNlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgY3VyU291cmNlID0gdGhpcy5fc291cmNlc1tpXVxuICAgICAgY29uc3QgdmFsdWUgPSBjdXJTb3VyY2UuZ2V0KHBhdGgpXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZhbHVlXG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgfVxuICB1c2VTb3VyY2UgKHNvdXJjZSkge1xuICAgIHRoaXMuX3NvdXJjZXMucHVzaChzb3VyY2UpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBnZXRTb3VyY2VzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc291cmNlc1xuICB9XG4gIHNjaGVtYSAoc2NoZW1hKSB7XG4gICAgdGhpcy5fc2NoZW1hID0gc2NoZW1hXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICB2YWxpZGF0ZSAocGF0aCkge1xuICAgIGlmICghdGhpcy5fc2NoZW1hKSB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgdmFsaWRhdGUgd2l0aG91dCBhIHNjaGVtYS4nKVxuICAgIHJldHVybiB0aGlzLl9zY2hlbWEudmFsaWRhdGUodGhpcywgcGF0aClcbiAgfVxuICB2YWxpZGF0aW9uRXJyb3JzICgpIHtcbiAgICBpZiAoIXRoaXMuX3NjaGVtYSkgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IHZhbGlkYXRlIHdpdGhvdXQgYSBzY2hlbWEuJylcbiAgICByZXR1cm4gdGhpcy5fc2NoZW1hLmxhc3RFcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdcbiJdfQ==