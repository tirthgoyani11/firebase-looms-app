/**
 * Firebase Database Service
 * 
 * @description Handles Firestore database operations for Firebase Looms App
 * @author Firebase Looms Team
 * @version 1.0.0
 */

import { getFirestore } from 'firebase/firestore';
import { app } from '../config/firebase-init.js';

/**
 * Initialize Firebase Firestore instance
 * @returns {Firestore} The Firebase Firestore instance
 */
export const initializeDatabase = () => {
  try {
    const db = getFirestore(app);
    console.log('Firebase Firestore initialized successfully');
    return db;
  } catch (error) {
    console.error('Error initializing Firebase Firestore:', error);
    throw error;
  }
};

/**
 * Get the Firebase Firestore instance
 * @returns {Firestore} The Firebase Firestore instance
 */
export const getFirebaseDatabase = () => {
  return initializeDatabase();
};

// Export the database instance for direct use
export const db = initializeDatabase();

/**
 * Database operation helpers
 */
export const databaseOperations = {
  /**
   * Get database instance
   * @returns {Firestore} The database instance
   */
  getInstance: () => db,
  
  /**
   * Check if database is available
   * @returns {boolean} True if database is available
   */
  isAvailable: () => {
    try {
      return db !== null && db !== undefined;
    } catch (error) {
      console.error('Database availability check failed:', error);
      return false;
    }
  }
};
