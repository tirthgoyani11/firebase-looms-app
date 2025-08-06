/**
 * Constants for Firebase Looms App
 * 
 * @description Application-level constants and configuration values
 * @author Firebase Looms Team
 * @version 1.0.0
 */

/**
 * Application identifier
 * Falls back to default if __app_id is not defined
 */
export const APP_ID = typeof __app_id !== 'undefined' ? __app_id : 'default-looms-app';

/**
 * Firebase collection paths
 */
export const COLLECTION_PATHS = {
  ARTIFACTS: 'artifacts',
  PUBLIC: 'public',
  DATA: 'data',
  USERS: 'users'
};

/**
 * Application version
 */
export const APP_VERSION = '1.0.0';

/**
 * Default configuration values
 */
export const DEFAULT_CONFIG = {
  maxRetries: 3,
  timeout: 10000,
  batchSize: 100
};
