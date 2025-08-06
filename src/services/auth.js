/**
 * Firebase Authentication Service
 * 
 * @description Handles authentication operations for Firebase Looms App
 * @author Firebase Looms Team
 * @version 1.0.0
 */

import { getAuth } from 'firebase/auth';
import { app } from '../config/firebase-init.js';

/**
 * Initialize Firebase Auth instance
 * @returns {Auth} The Firebase Auth instance
 */
export const initializeAuth = () => {
  try {
    const auth = getAuth(app);
    console.log('Firebase Auth initialized successfully');
    return auth;
  } catch (error) {
    console.error('Error initializing Firebase Auth:', error);
    throw error;
  }
};

/**
 * Get the Firebase Auth instance
 * @returns {Auth} The Firebase Auth instance
 */
export const getFirebaseAuth = () => {
  return initializeAuth();
};

// Export the auth instance for direct use
export const auth = initializeAuth();

/**
 * Authentication state observer
 * @param {Function} callback - Callback function to handle auth state changes
 * @returns {Function} Unsubscribe function
 */
export const onAuthStateChanged = (callback) => {
  return auth.onAuthStateChanged(callback);
};

/**
 * Get current user
 * @returns {User|null} Current user or null if not authenticated
 */
export const getCurrentUser = () => {
  return auth.currentUser;
};

/**
 * Check if user is authenticated
 * @returns {boolean} True if user is authenticated, false otherwise
 */
export const isAuthenticated = () => {
  return auth.currentUser !== null;
};
