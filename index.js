/**
 * Firebase Looms App - Main Entry Point
 * 
 * @description Main module that exports all Firebase services and utilities
 * @author Firebase Looms Team
 * @version 1.0.0
 */

// Configuration and Constants
export { APP_ID, COLLECTION_PATHS, APP_VERSION, DEFAULT_CONFIG } from './src/config/constants.js';
export { initializeFirebaseApp, getFirebaseApp, app } from './src/config/firebase-init.js';

// Authentication Services
export { 
  initializeAuth, 
  getFirebaseAuth, 
  auth, 
  onAuthStateChanged, 
  getCurrentUser, 
  isAuthenticated 
} from './src/services/auth.js';

// Database Services
export { 
  initializeDatabase, 
  getFirebaseDatabase, 
  db, 
  databaseOperations 
} from './src/services/database.js';

// Helper Functions and Utilities
export { 
  publicPath, 
  usersPath, 
  pathUtils, 
  helpers 
} from './src/services/helpers.js';

/**
 * Initialize all Firebase services
 * @returns {Object} Initialized Firebase services
 */
export const initializeFirebaseLooms = () => {
  try {
    // Initialize Firebase app
    const firebaseApp = initializeFirebaseApp();
    
    // Initialize auth
    const firebaseAuth = initializeAuth();
    
    // Initialize database
    const firebaseDb = initializeDatabase();
    
    console.log('Firebase Looms App initialized successfully');
    
    return {
      app: firebaseApp,
      auth: firebaseAuth,
      db: firebaseDb,
      initialized: true
    };
  } catch (error) {
    console.error('Error initializing Firebase Looms App:', error);
    throw error;
  }
};

/**
 * Check if all services are available
 * @returns {Object} Service availability status
 */
export const checkServiceAvailability = () => {
  return {
    app: app !== null,
    auth: auth !== null,
    database: databaseOperations.isAvailable(),
    helpers: typeof publicPath === 'function' && typeof usersPath === 'function'
  };
};

// Default export for convenience
export default {
  // Core services
  app,
  auth,
  db,
  
  // Utilities
  publicPath,
  usersPath,
  pathUtils,
  helpers,
  
  // Configuration
  APP_ID,
  COLLECTION_PATHS,
  
  // Functions
  initialize: initializeFirebaseLooms,
  checkAvailability: checkServiceAvailability
};
