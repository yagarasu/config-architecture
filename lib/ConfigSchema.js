'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chai = require('chai');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConfigSchema = function () {
  function ConfigSchema(schema) {
    _classCallCheck(this, ConfigSchema);

    this._schema = schema;
  }

  _createClass(ConfigSchema, [{
    key: 'validate',
    value: function validate(ConfigManager) {
      var errs = this.validateBlock(ConfigManager, this._schema);
      console.log(errs);
    }
  }, {
    key: 'validateBlock',
    value: function validateBlock(ConfigManager, block) {
      var pathPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var errors = [];
      for (var key in block) {
        var path = pathPrefix !== '' ? pathPrefix + '.' + key : key;
        console.log('Check ' + key);
        var desc = block[key];
        var validator = (typeof desc === 'undefined' ? 'undefined' : _typeof(desc)) === 'object' && !desc.type ? this.validateBlock.bind(this) : this.validateField.bind(this);
        errors = [].concat(_toConsumableArray(errors), _toConsumableArray(validator(ConfigManager, desc, path)));
      }
      return errors;
    }
  }, {
    key: 'validateField',
    value: function validateField(ConfigManager, desc, key) {
      var errors = [];
      var type = (typeof desc === 'undefined' ? 'undefined' : _typeof(desc)) === 'object' && desc.type ? desc.type : desc;
      console.log('...type is ' + type);
      var variable = ConfigManager.get(key);
      console.log('Variable: ' + variable);
      console.log('...type check' + ((typeof variable === 'undefined' ? 'undefined' : _typeof(variable)) === type));
      if ((typeof variable === 'undefined' ? 'undefined' : _typeof(variable)) !== type) {
        console.log('Error found');
        // Throw error
        errors.push(key + ' is not a ' + type);
      }
      if ((typeof desc === 'undefined' ? 'undefined' : _typeof(desc)) === 'object' && desc.validate && typeof desc.validate === 'function') {
        try {
          desc.validate(variable, _chai.expect);
        } catch (e) {
          errors.push(e.message);
        }
      }
      return errors;
    }
  }]);

  return ConfigSchema;
}();

exports.default = ConfigSchema;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db25maWdTY2hlbWEuanMiXSwibmFtZXMiOlsiQ29uZmlnU2NoZW1hIiwic2NoZW1hIiwiX3NjaGVtYSIsIkNvbmZpZ01hbmFnZXIiLCJlcnJzIiwidmFsaWRhdGVCbG9jayIsImNvbnNvbGUiLCJsb2ciLCJibG9jayIsInBhdGhQcmVmaXgiLCJlcnJvcnMiLCJrZXkiLCJwYXRoIiwiZGVzYyIsInZhbGlkYXRvciIsInR5cGUiLCJiaW5kIiwidmFsaWRhdGVGaWVsZCIsInZhcmlhYmxlIiwiZ2V0IiwicHVzaCIsInZhbGlkYXRlIiwiZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRU1BLFk7QUFDSix3QkFBYUMsTUFBYixFQUFxQjtBQUFBOztBQUNuQixTQUFLQyxPQUFMLEdBQWVELE1BQWY7QUFDRDs7Ozs2QkFDU0UsYSxFQUFlO0FBQ3ZCLFVBQU1DLE9BQU8sS0FBS0MsYUFBTCxDQUFtQkYsYUFBbkIsRUFBa0MsS0FBS0QsT0FBdkMsQ0FBYjtBQUNBSSxjQUFRQyxHQUFSLENBQVlILElBQVo7QUFDRDs7O2tDQUNjRCxhLEVBQWVLLEssRUFBd0I7QUFBQSxVQUFqQkMsVUFBaUIsdUVBQUosRUFBSTs7QUFDcEQsVUFBSUMsU0FBUyxFQUFiO0FBQ0EsV0FBSyxJQUFJQyxHQUFULElBQWdCSCxLQUFoQixFQUF1QjtBQUNyQixZQUFNSSxPQUFRSCxlQUFlLEVBQWhCLEdBQXlCQSxVQUF6QixTQUF1Q0UsR0FBdkMsR0FBK0NBLEdBQTVEO0FBQ0FMLGdCQUFRQyxHQUFSLENBQVksV0FBV0ksR0FBdkI7QUFDQSxZQUFNRSxPQUFPTCxNQUFNRyxHQUFOLENBQWI7QUFDQSxZQUFNRyxZQUFhLFFBQU9ELElBQVAseUNBQU9BLElBQVAsT0FBZ0IsUUFBaEIsSUFBNEIsQ0FBQ0EsS0FBS0UsSUFBbkMsR0FDZCxLQUFLVixhQUFMLENBQW1CVyxJQUFuQixDQUF3QixJQUF4QixDQURjLEdBRWQsS0FBS0MsYUFBTCxDQUFtQkQsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FGSjtBQUdBTiw4Q0FBYUEsTUFBYixzQkFBd0JJLFVBQVVYLGFBQVYsRUFBeUJVLElBQXpCLEVBQStCRCxJQUEvQixDQUF4QjtBQUNEO0FBQ0QsYUFBT0YsTUFBUDtBQUNEOzs7a0NBQ2NQLGEsRUFBZVUsSSxFQUFNRixHLEVBQUs7QUFDdkMsVUFBSUQsU0FBUyxFQUFiO0FBQ0EsVUFBTUssT0FBUSxRQUFPRixJQUFQLHlDQUFPQSxJQUFQLE9BQWdCLFFBQWhCLElBQTRCQSxLQUFLRSxJQUFsQyxHQUNURixLQUFLRSxJQURJLEdBQ0dGLElBRGhCO0FBRUFQLGNBQVFDLEdBQVIsQ0FBWSxnQkFBZ0JRLElBQTVCO0FBQ0EsVUFBTUcsV0FBV2YsY0FBY2dCLEdBQWQsQ0FBa0JSLEdBQWxCLENBQWpCO0FBQ0FMLGNBQVFDLEdBQVIsQ0FBWSxlQUFlVyxRQUEzQjtBQUNBWixjQUFRQyxHQUFSLENBQVksbUJBQW1CLFFBQU9XLFFBQVAseUNBQU9BLFFBQVAsT0FBb0JILElBQXZDLENBQVo7QUFDQSxVQUFJLFFBQU9HLFFBQVAseUNBQU9BLFFBQVAsT0FBb0JILElBQXhCLEVBQThCO0FBQzVCVCxnQkFBUUMsR0FBUixDQUFZLGFBQVo7QUFDQTtBQUNBRyxlQUFPVSxJQUFQLENBQWVULEdBQWYsa0JBQStCSSxJQUEvQjtBQUNEO0FBQ0QsVUFBSSxRQUFPRixJQUFQLHlDQUFPQSxJQUFQLE9BQWdCLFFBQWhCLElBQTRCQSxLQUFLUSxRQUFqQyxJQUE2QyxPQUFPUixLQUFLUSxRQUFaLEtBQXlCLFVBQTFFLEVBQXNGO0FBQ3BGLFlBQUk7QUFDRlIsZUFBS1EsUUFBTCxDQUFjSCxRQUFkO0FBQ0QsU0FGRCxDQUVFLE9BQU9JLENBQVAsRUFBVTtBQUNWWixpQkFBT1UsSUFBUCxDQUFZRSxFQUFFQyxPQUFkO0FBQ0Q7QUFDRjtBQUNELGFBQU9iLE1BQVA7QUFDRDs7Ozs7O2tCQUdZVixZIiwiZmlsZSI6IkNvbmZpZ1NjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4cGVjdCB9IGZyb20gJ2NoYWknXG5cbmNsYXNzIENvbmZpZ1NjaGVtYSB7XG4gIGNvbnN0cnVjdG9yIChzY2hlbWEpIHtcbiAgICB0aGlzLl9zY2hlbWEgPSBzY2hlbWFcbiAgfVxuICB2YWxpZGF0ZSAoQ29uZmlnTWFuYWdlcikge1xuICAgIGNvbnN0IGVycnMgPSB0aGlzLnZhbGlkYXRlQmxvY2soQ29uZmlnTWFuYWdlciwgdGhpcy5fc2NoZW1hKVxuICAgIGNvbnNvbGUubG9nKGVycnMpXG4gIH1cbiAgdmFsaWRhdGVCbG9jayAoQ29uZmlnTWFuYWdlciwgYmxvY2ssIHBhdGhQcmVmaXggPSAnJykge1xuICAgIGxldCBlcnJvcnMgPSBbXVxuICAgIGZvciAobGV0IGtleSBpbiBibG9jaykge1xuICAgICAgY29uc3QgcGF0aCA9IChwYXRoUHJlZml4ICE9PSAnJykgPyBgJHtwYXRoUHJlZml4fS4ke2tleX1gIDoga2V5XG4gICAgICBjb25zb2xlLmxvZygnQ2hlY2sgJyArIGtleSlcbiAgICAgIGNvbnN0IGRlc2MgPSBibG9ja1trZXldXG4gICAgICBjb25zdCB2YWxpZGF0b3IgPSAodHlwZW9mIGRlc2MgPT09ICdvYmplY3QnICYmICFkZXNjLnR5cGUpXG4gICAgICAgID8gdGhpcy52YWxpZGF0ZUJsb2NrLmJpbmQodGhpcylcbiAgICAgICAgOiB0aGlzLnZhbGlkYXRlRmllbGQuYmluZCh0aGlzKVxuICAgICAgZXJyb3JzID0gWy4uLmVycm9ycywgLi4udmFsaWRhdG9yKENvbmZpZ01hbmFnZXIsIGRlc2MsIHBhdGgpXVxuICAgIH1cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cbiAgdmFsaWRhdGVGaWVsZCAoQ29uZmlnTWFuYWdlciwgZGVzYywga2V5KSB7XG4gICAgbGV0IGVycm9ycyA9IFtdXG4gICAgY29uc3QgdHlwZSA9ICh0eXBlb2YgZGVzYyA9PT0gJ29iamVjdCcgJiYgZGVzYy50eXBlKVxuICAgICAgPyBkZXNjLnR5cGUgOiBkZXNjXG4gICAgY29uc29sZS5sb2coJy4uLnR5cGUgaXMgJyArIHR5cGUpXG4gICAgY29uc3QgdmFyaWFibGUgPSBDb25maWdNYW5hZ2VyLmdldChrZXkpXG4gICAgY29uc29sZS5sb2coJ1ZhcmlhYmxlOiAnICsgdmFyaWFibGUpXG4gICAgY29uc29sZS5sb2coJy4uLnR5cGUgY2hlY2snICsgKHR5cGVvZiB2YXJpYWJsZSA9PT0gdHlwZSkpXG4gICAgaWYgKHR5cGVvZiB2YXJpYWJsZSAhPT0gdHlwZSkge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZvdW5kJylcbiAgICAgIC8vIFRocm93IGVycm9yXG4gICAgICBlcnJvcnMucHVzaChgJHtrZXl9IGlzIG5vdCBhICR7dHlwZX1gKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGRlc2MgPT09ICdvYmplY3QnICYmIGRlc2MudmFsaWRhdGUgJiYgdHlwZW9mIGRlc2MudmFsaWRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRlc2MudmFsaWRhdGUodmFyaWFibGUsIGV4cGVjdClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goZS5tZXNzYWdlKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnU2NoZW1hXG4iXX0=