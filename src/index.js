import CM from './ConfigManager'
import CS from './ConfigSchema'

// Public Classes
export const ConfigManager = CM
export const ConfigSchema = CS

// Singleton
export default new ConfigManager()
