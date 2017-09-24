'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigSchema = exports.ConfigManager = undefined;

var _ConfigManager = require('./ConfigManager');

var _ConfigManager2 = _interopRequireDefault(_ConfigManager);

var _ConfigSchema = require('./ConfigSchema');

var _ConfigSchema2 = _interopRequireDefault(_ConfigSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Public Classes
var ConfigManager = exports.ConfigManager = _ConfigManager2.default;
var ConfigSchema = exports.ConfigSchema = _ConfigSchema2.default;

// Singleton
exports.default = new ConfigManager();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb25maWdNYW5hZ2VyIiwiQ29uZmlnU2NoZW1hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDTyxJQUFNQSwrREFBTjtBQUNBLElBQU1DLDREQUFOOztBQUVQO2tCQUNlLElBQUlELGFBQUosRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDTSBmcm9tICcuL0NvbmZpZ01hbmFnZXInXG5pbXBvcnQgQ1MgZnJvbSAnLi9Db25maWdTY2hlbWEnXG5cbi8vIFB1YmxpYyBDbGFzc2VzXG5leHBvcnQgY29uc3QgQ29uZmlnTWFuYWdlciA9IENNXG5leHBvcnQgY29uc3QgQ29uZmlnU2NoZW1hID0gQ1NcblxuLy8gU2luZ2xldG9uXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29uZmlnTWFuYWdlcigpXG4iXX0=