'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chai = require('chai');

var _typeDetect = require('type-detect');

var _typeDetect2 = _interopRequireDefault(_typeDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConfigSchema = function () {
  function ConfigSchema(schemaObject) {
    _classCallCheck(this, ConfigSchema);

    this._schema = this.buildSchema(schemaObject);
    this.lastErrors = null;
  }

  _createClass(ConfigSchema, [{
    key: 'isNested',
    value: function isNested(obj) {
      return (0, _typeDetect2.default)(obj) === 'Object' && !obj.type;
    }
  }, {
    key: 'createDescriptor',
    value: function createDescriptor(obj) {
      var type = obj;
      type = (0, _typeDetect2.default)(obj) === 'Object' && obj.type ? obj.type : type;
      var validators = (0, _typeDetect2.default)(obj) === 'Object' && obj.validator ? [function (value, expect) {
        return expect(value).to.be.a(type);
      }, obj.validator] : [function (value, expect) {
        return expect(value).to.be.a(type);
      }];
      if ((0, _typeDetect2.default)(obj) === 'Array' && obj.length > 0) {
        // @TODO: Create logic for typed arrays. Eg: ['string']
      }
      return {
        type: type,
        validators: validators
      };
    }
  }, {
    key: 'buildSchema',
    value: function buildSchema(schemaObject) {
      var _this = this;

      var schema = {};
      var parse = function parse(obj, path) {
        for (var key in obj) {
          var fullPath = path ? path + '.' + key : key;
          var rightHand = obj[key];
          if (_this.isNested(rightHand)) {
            parse(rightHand, fullPath);
          } else {
            schema[fullPath] = _this.createDescriptor(rightHand);
          }
        }
      };
      parse(schemaObject);
      return schema;
    }
  }, {
    key: 'validate',
    value: function validate(ConfigManager, specificPath) {
      var _this2 = this;

      this.lastErrors = null;
      var errs = [];
      var keys = !specificPath ? Object.keys(this._schema) : [specificPath];
      keys.forEach(function (path) {
        var desc = _this2._schema[path];
        desc.validators.forEach(function (validator) {
          try {
            validator(ConfigManager.get(path), _chai.expect);
          } catch (e) {
            errs.push(e.message);
          }
        });
      });
      if (errs.length === 0) return true;
      this.lastErrors = errs;
      return false;
    }
  }]);

  return ConfigSchema;
}();

exports.default = ConfigSchema;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db25maWdTY2hlbWEuanMiXSwibmFtZXMiOlsiQ29uZmlnU2NoZW1hIiwic2NoZW1hT2JqZWN0IiwiX3NjaGVtYSIsImJ1aWxkU2NoZW1hIiwibGFzdEVycm9ycyIsIm9iaiIsInR5cGUiLCJ2YWxpZGF0b3JzIiwidmFsaWRhdG9yIiwidmFsdWUiLCJleHBlY3QiLCJ0byIsImJlIiwiYSIsImxlbmd0aCIsInNjaGVtYSIsInBhcnNlIiwicGF0aCIsImtleSIsImZ1bGxQYXRoIiwicmlnaHRIYW5kIiwiaXNOZXN0ZWQiLCJjcmVhdGVEZXNjcmlwdG9yIiwiQ29uZmlnTWFuYWdlciIsInNwZWNpZmljUGF0aCIsImVycnMiLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImRlc2MiLCJnZXQiLCJlIiwicHVzaCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0lBRU1BLFk7QUFDSix3QkFBYUMsWUFBYixFQUEyQjtBQUFBOztBQUN6QixTQUFLQyxPQUFMLEdBQWUsS0FBS0MsV0FBTCxDQUFpQkYsWUFBakIsQ0FBZjtBQUNBLFNBQUtHLFVBQUwsR0FBa0IsSUFBbEI7QUFDRDs7Ozs2QkFFU0MsRyxFQUFLO0FBQ2IsYUFBUSwwQkFBV0EsR0FBWCxNQUFvQixRQUFwQixJQUFnQyxDQUFDQSxJQUFJQyxJQUE3QztBQUNEOzs7cUNBRWlCRCxHLEVBQUs7QUFDckIsVUFBSUMsT0FBT0QsR0FBWDtBQUNBQyxhQUFRLDBCQUFXRCxHQUFYLE1BQW9CLFFBQXBCLElBQWdDQSxJQUFJQyxJQUFyQyxHQUE2Q0QsSUFBSUMsSUFBakQsR0FBd0RBLElBQS9EO0FBQ0EsVUFBTUMsYUFBYywwQkFBV0YsR0FBWCxNQUFvQixRQUFwQixJQUFnQ0EsSUFBSUcsU0FBckMsR0FDZixDQUFDLFVBQUNDLEtBQUQsRUFBUUMsTUFBUjtBQUFBLGVBQW1CQSxPQUFPRCxLQUFQLEVBQWNFLEVBQWQsQ0FBaUJDLEVBQWpCLENBQW9CQyxDQUFwQixDQUFzQlAsSUFBdEIsQ0FBbkI7QUFBQSxPQUFELEVBQWlERCxJQUFJRyxTQUFyRCxDQURlLEdBRWYsQ0FBQyxVQUFDQyxLQUFELEVBQVFDLE1BQVI7QUFBQSxlQUFtQkEsT0FBT0QsS0FBUCxFQUFjRSxFQUFkLENBQWlCQyxFQUFqQixDQUFvQkMsQ0FBcEIsQ0FBc0JQLElBQXRCLENBQW5CO0FBQUEsT0FBRCxDQUZKO0FBR0EsVUFBSSwwQkFBV0QsR0FBWCxNQUFvQixPQUFwQixJQUErQkEsSUFBSVMsTUFBSixHQUFhLENBQWhELEVBQW1EO0FBQ2pEO0FBQ0Q7QUFDRCxhQUFPO0FBQ0xSLGtCQURLO0FBRUxDO0FBRkssT0FBUDtBQUlEOzs7Z0NBRVlOLFksRUFBYztBQUFBOztBQUN6QixVQUFNYyxTQUFTLEVBQWY7QUFDQSxVQUFNQyxRQUFRLFNBQVJBLEtBQVEsQ0FBQ1gsR0FBRCxFQUFNWSxJQUFOLEVBQWU7QUFDM0IsYUFBSyxJQUFJQyxHQUFULElBQWdCYixHQUFoQixFQUFxQjtBQUNuQixjQUFNYyxXQUFZRixJQUFELEdBQVlBLElBQVosU0FBb0JDLEdBQXBCLEdBQTRCQSxHQUE3QztBQUNBLGNBQU1FLFlBQVlmLElBQUlhLEdBQUosQ0FBbEI7QUFDQSxjQUFJLE1BQUtHLFFBQUwsQ0FBY0QsU0FBZCxDQUFKLEVBQThCO0FBQzVCSixrQkFBTUksU0FBTixFQUFpQkQsUUFBakI7QUFDRCxXQUZELE1BRU87QUFDTEosbUJBQU9JLFFBQVAsSUFBbUIsTUFBS0csZ0JBQUwsQ0FBc0JGLFNBQXRCLENBQW5CO0FBQ0Q7QUFDRjtBQUNGLE9BVkQ7QUFXQUosWUFBTWYsWUFBTjtBQUNBLGFBQU9jLE1BQVA7QUFDRDs7OzZCQUVTUSxhLEVBQWVDLFksRUFBYztBQUFBOztBQUNyQyxXQUFLcEIsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQU1xQixPQUFPLEVBQWI7QUFDQSxVQUFNQyxPQUFRLENBQUNGLFlBQUYsR0FDVEcsT0FBT0QsSUFBUCxDQUFZLEtBQUt4QixPQUFqQixDQURTLEdBRVQsQ0FBQ3NCLFlBQUQsQ0FGSjtBQUdBRSxXQUFLRSxPQUFMLENBQWEsVUFBQ1gsSUFBRCxFQUFVO0FBQ3JCLFlBQU1ZLE9BQU8sT0FBSzNCLE9BQUwsQ0FBYWUsSUFBYixDQUFiO0FBQ0FZLGFBQUt0QixVQUFMLENBQWdCcUIsT0FBaEIsQ0FBd0IsVUFBQ3BCLFNBQUQsRUFBZTtBQUNyQyxjQUFJO0FBQ0ZBLHNCQUFVZSxjQUFjTyxHQUFkLENBQWtCYixJQUFsQixDQUFWO0FBQ0QsV0FGRCxDQUVFLE9BQU9jLENBQVAsRUFBVTtBQUNWTixpQkFBS08sSUFBTCxDQUFVRCxFQUFFRSxPQUFaO0FBQ0Q7QUFDRixTQU5EO0FBT0QsT0FURDtBQVVBLFVBQUlSLEtBQUtYLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUIsT0FBTyxJQUFQO0FBQ3ZCLFdBQUtWLFVBQUwsR0FBa0JxQixJQUFsQjtBQUNBLGFBQU8sS0FBUDtBQUNEOzs7Ozs7a0JBR1l6QixZIiwiZmlsZSI6IkNvbmZpZ1NjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4cGVjdCB9IGZyb20gJ2NoYWknXG5pbXBvcnQgdHlwZURldGVjdCBmcm9tICd0eXBlLWRldGVjdCdcblxuY2xhc3MgQ29uZmlnU2NoZW1hIHtcbiAgY29uc3RydWN0b3IgKHNjaGVtYU9iamVjdCkge1xuICAgIHRoaXMuX3NjaGVtYSA9IHRoaXMuYnVpbGRTY2hlbWEoc2NoZW1hT2JqZWN0KVxuICAgIHRoaXMubGFzdEVycm9ycyA9IG51bGxcbiAgfVxuXG4gIGlzTmVzdGVkIChvYmopIHtcbiAgICByZXR1cm4gKHR5cGVEZXRlY3Qob2JqKSA9PT0gJ09iamVjdCcgJiYgIW9iai50eXBlKVxuICB9XG5cbiAgY3JlYXRlRGVzY3JpcHRvciAob2JqKSB7XG4gICAgbGV0IHR5cGUgPSBvYmpcbiAgICB0eXBlID0gKHR5cGVEZXRlY3Qob2JqKSA9PT0gJ09iamVjdCcgJiYgb2JqLnR5cGUpID8gb2JqLnR5cGUgOiB0eXBlXG4gICAgY29uc3QgdmFsaWRhdG9ycyA9ICh0eXBlRGV0ZWN0KG9iaikgPT09ICdPYmplY3QnICYmIG9iai52YWxpZGF0b3IpXG4gICAgICA/IFsodmFsdWUsIGV4cGVjdCkgPT4gZXhwZWN0KHZhbHVlKS50by5iZS5hKHR5cGUpLCBvYmoudmFsaWRhdG9yXVxuICAgICAgOiBbKHZhbHVlLCBleHBlY3QpID0+IGV4cGVjdCh2YWx1ZSkudG8uYmUuYSh0eXBlKV1cbiAgICBpZiAodHlwZURldGVjdChvYmopID09PSAnQXJyYXknICYmIG9iai5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBAVE9ETzogQ3JlYXRlIGxvZ2ljIGZvciB0eXBlZCBhcnJheXMuIEVnOiBbJ3N0cmluZyddXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0eXBlLFxuICAgICAgdmFsaWRhdG9yc1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkU2NoZW1hIChzY2hlbWFPYmplY3QpIHtcbiAgICBjb25zdCBzY2hlbWEgPSB7fVxuICAgIGNvbnN0IHBhcnNlID0gKG9iaiwgcGF0aCkgPT4ge1xuICAgICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IChwYXRoKSA/IGAke3BhdGh9LiR7a2V5fWAgOiBrZXlcbiAgICAgICAgY29uc3QgcmlnaHRIYW5kID0gb2JqW2tleV1cbiAgICAgICAgaWYgKHRoaXMuaXNOZXN0ZWQocmlnaHRIYW5kKSkge1xuICAgICAgICAgIHBhcnNlKHJpZ2h0SGFuZCwgZnVsbFBhdGgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NoZW1hW2Z1bGxQYXRoXSA9IHRoaXMuY3JlYXRlRGVzY3JpcHRvcihyaWdodEhhbmQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcGFyc2Uoc2NoZW1hT2JqZWN0KVxuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIHZhbGlkYXRlIChDb25maWdNYW5hZ2VyLCBzcGVjaWZpY1BhdGgpIHtcbiAgICB0aGlzLmxhc3RFcnJvcnMgPSBudWxsXG4gICAgY29uc3QgZXJycyA9IFtdXG4gICAgY29uc3Qga2V5cyA9ICghc3BlY2lmaWNQYXRoKVxuICAgICAgPyBPYmplY3Qua2V5cyh0aGlzLl9zY2hlbWEpXG4gICAgICA6IFtzcGVjaWZpY1BhdGhdXG4gICAga2V5cy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICBjb25zdCBkZXNjID0gdGhpcy5fc2NoZW1hW3BhdGhdXG4gICAgICBkZXNjLnZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFsaWRhdG9yKENvbmZpZ01hbmFnZXIuZ2V0KHBhdGgpLCBleHBlY3QpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBlcnJzLnB1c2goZS5tZXNzYWdlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgaWYgKGVycnMubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZVxuICAgIHRoaXMubGFzdEVycm9ycyA9IGVycnNcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdTY2hlbWFcbiJdfQ==