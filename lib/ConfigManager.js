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
    value: function validate(path) {
      if (!this._schema) throw new Error('Can not validate without a schema.');
      return this._schema.validate(this, path);
    }
  }, {
    key: 'validationErrors',
    value: function validationErrors() {
      return this._schema.lastErrors;
    }
  }]);

  return Config;
}();

exports.default = Config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db25maWdNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIkNvbmZpZyIsIl9zb3VyY2VzIiwiX3NjaGVtYSIsInBhdGgiLCJkZWZhdWx0VmFsdWUiLCJpIiwibGVuZ3RoIiwiY3VyU291cmNlIiwidmFsdWUiLCJnZXQiLCJ1bmRlZmluZWQiLCJzb3VyY2UiLCJwdXNoIiwic2NoZW1hIiwiRXJyb3IiLCJ2YWxpZGF0ZSIsImxhc3RFcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTtBQUNKLG9CQUFlO0FBQUE7O0FBQ2IsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0Q7Ozs7d0JBQ0lDLEksRUFBTUMsWSxFQUFjO0FBQ3ZCLFdBQUssSUFBSUMsSUFBSSxLQUFLSixRQUFMLENBQWNLLE1BQWQsR0FBdUIsQ0FBcEMsRUFBdUNELEtBQUssQ0FBNUMsRUFBK0NBLEdBQS9DLEVBQW9EO0FBQ2xELFlBQU1FLFlBQVksS0FBS04sUUFBTCxDQUFjSSxDQUFkLENBQWxCO0FBQ0EsWUFBTUcsUUFBUUQsVUFBVUUsR0FBVixDQUFjTixJQUFkLENBQWQ7QUFDQSxZQUFJSyxVQUFVRSxTQUFkLEVBQXlCLE9BQU9GLEtBQVA7QUFDMUI7QUFDRCxhQUFPSixZQUFQO0FBQ0Q7Ozs4QkFDVU8sTSxFQUFRO0FBQ2pCLFdBQUtWLFFBQUwsQ0FBY1csSUFBZCxDQUFtQkQsTUFBbkI7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzJCQUNPRSxPLEVBQVE7QUFDZCxXQUFLWCxPQUFMLEdBQWVXLE9BQWY7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzZCQUNTVixJLEVBQU07QUFDZCxVQUFJLENBQUMsS0FBS0QsT0FBVixFQUFtQixNQUFNLElBQUlZLEtBQUosQ0FBVSxvQ0FBVixDQUFOO0FBQ25CLGFBQU8sS0FBS1osT0FBTCxDQUFhYSxRQUFiLENBQXNCLElBQXRCLEVBQTRCWixJQUE1QixDQUFQO0FBQ0Q7Ozt1Q0FDbUI7QUFDbEIsYUFBTyxLQUFLRCxPQUFMLENBQWFjLFVBQXBCO0FBQ0Q7Ozs7OztrQkFHWWhCLE0iLCJmaWxlIjoiQ29uZmlnTWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9zb3VyY2VzID0gW11cbiAgICB0aGlzLl9zY2hlbWEgPSBudWxsXG4gIH1cbiAgZ2V0IChwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5fc291cmNlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgY3VyU291cmNlID0gdGhpcy5fc291cmNlc1tpXVxuICAgICAgY29uc3QgdmFsdWUgPSBjdXJTb3VyY2UuZ2V0KHBhdGgpXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZhbHVlXG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgfVxuICBhZGRTb3VyY2UgKHNvdXJjZSkge1xuICAgIHRoaXMuX3NvdXJjZXMucHVzaChzb3VyY2UpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBzY2hlbWEgKHNjaGVtYSkge1xuICAgIHRoaXMuX3NjaGVtYSA9IHNjaGVtYVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgdmFsaWRhdGUgKHBhdGgpIHtcbiAgICBpZiAoIXRoaXMuX3NjaGVtYSkgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IHZhbGlkYXRlIHdpdGhvdXQgYSBzY2hlbWEuJylcbiAgICByZXR1cm4gdGhpcy5fc2NoZW1hLnZhbGlkYXRlKHRoaXMsIHBhdGgpXG4gIH1cbiAgdmFsaWRhdGlvbkVycm9ycyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjaGVtYS5sYXN0RXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnXG4iXX0=