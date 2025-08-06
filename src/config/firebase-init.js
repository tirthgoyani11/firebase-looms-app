/**
 * Firebase Initialization Module
 * 
 * @description Initializes Firebase app with configuration
 * @author Firebase Looms Team
 * @version 1.0.0
 */

import { initializeApp } from 'firebase/app';
import { APP_ID } from './constants.js';

/**
 * Firebase configuration object
 * Replace with your actual Firebase project configuration
 */
const firebaseConfig = {
  // TODO: Add your Firebase configuration
  // apiKey: "your-api-key",
  // authDomain: "your-project.firebaseapp.com",
  // projectId: "your-project-id",
  // storageBucket: "your-project.appspot.com",
  // messagingSenderId: "123456789",
  // appId: "1:123456789:web:abcdef123456"
};

/**
 * Initialize Firebase application
 * @returns {FirebaseApp} The initialized Firebase app instance
 */
export const initializeFirebaseApp = () => {
  try {
    const app = initializeApp(firebaseConfig);
    console.log(`Firebase app initialized successfully with ID: ${APP_ID}`);
    return app;
  } catch (error) {
    console.error('Error initializing Firebase app:', error);
    throw error;
  }
};

/**
 * Get the Firebase app instance
 * @returns {FirebaseApp} The Firebase app instance
 */
export const getFirebaseApp = () => {
  return initializeFirebaseApp();
};

// Export the app instance for direct use
export const app = initializeFirebaseApp();
