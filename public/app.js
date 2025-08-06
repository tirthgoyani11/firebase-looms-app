// Firebase Looms App - Frontend Bootstrap Script
// This script initializes the frontend application and provides user interaction

/**
 * App Configuration
 */
const AppConfig = {
    name: 'Firebase Looms App',
    version: '1.0.0',
    description: 'A powerful Firebase integration platform for modern web applications',
    documentationUrl: 'https://github.com/tirthgoyani11/firebase-looms-app/blob/main/README.md',
    features: [
        'Firebase Integration',
        'Real-time Updates', 
        'Secure Authentication',
        'Responsive Design'
    ]
};

/**
 * DOM Content Loaded Event Handler
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log(`%c🔥 ${AppConfig.name} v${AppConfig.version}`, 'color: #ff6b6b; font-size: 16px; font-weight: bold;');
    console.log('Frontend application initialized successfully!');
    
    // Initialize app components
    initializeApp();
    setupEventListeners();
    displayWelcomeMessage();
});

/**
 * Initialize the application
 */
function initializeApp() {
    console.log('Initializing Firebase Looms App...');
    
    // Check if all required elements are present
    const requiredElements = ['get-started', 'learn-more', 'docs-link'];
    const missingElements = requiredElements.filter(id => !document.getElementById(id));
    
    if (missingElements.length > 0) {
        console.warn('Missing elements:', missingElements);
    } else {
        console.log('All required elements found!');
    }
    
    // Display app information
    displayAppInfo();
}

/**
 * Setup event listeners for interactive elements
 */
function setupEventListeners() {
    // Get Started button
    const getStartedBtn = document.getElementById('get-started');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', handleGetStarted);
    }
    
    // Learn More button
    const learnMoreBtn = document.getElementById('learn-more');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', handleLearnMore);
    }
    
    // Documentation link
    const docsLink = document.getElementById('docs-link');
    if (docsLink) {
        docsLink.addEventListener('click', handleDocumentation);
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
    
    console.log('Event listeners initialized!');
}

/**
 * Display welcome message to users
 */
function displayWelcomeMessage() {
    const currentHour = new Date().getHours();
    let greeting;
    
    if (currentHour < 12) {
        greeting = 'Good morning';
    } else if (currentHour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }
    
    console.log(`${greeting}! Welcome to ${AppConfig.name}!`);
    
    // Show a subtle notification
    showNotification(`${greeting}! Welcome to Firebase Looms App 🔥`);
}

/**
 * Display app information in console
 */
function displayAppInfo() {
    console.group('🔥 Firebase Looms App Information');
    console.log('Name:', AppConfig.name);
    console.log('Version:', AppConfig.version);
    console.log('Description:', AppConfig.description);
    console.log('Features:', AppConfig.features.join(', '));
    console.log('Documentation:', AppConfig.documentationUrl);
    console.groupEnd();
}

/**
 * Handle Get Started button click
 */
function handleGetStarted() {
    console.log('Get Started button clicked!');
    showNotification('🚀 Getting started with Firebase Looms!');
    
    // Scroll to features section
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Handle Learn More button click
 */
function handleLearnMore() {
    console.log('Learn More button clicked!');
    showNotification('📚 Learning more about Firebase Looms!');
    
    // Scroll to about section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Handle Documentation link click
 */
function handleDocumentation(event) {
    event.preventDefault();
    console.log('Documentation link clicked!');
    showNotification('📖 Opening documentation...');
    
    // Open documentation in new tab
    setTimeout(() => {
        window.open(AppConfig.documentationUrl, '_blank');
    }, 500);
}

/**
 * Handle smooth scrolling for navigation links
 */
function handleSmoothScroll(event) {
    const href = event.target.getAttribute('href');
    
    if (href && href.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

/**
 * Show notification to user
 * @param {string} message - The message to display
 * @param {string} type - The type of notification (info, success, warning, error)
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 20px',
        backgroundColor: type === 'info' ? '#667eea' : '#ff6b6b',
        color: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '1000',
        fontSize: '14px',
        fontWeight: '500',
        opacity: '0',
        transform: 'translateY(-10px)',
        transition: 'all 0.3s ease'
    });
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

/**
 * Utility function to get app information
 * @returns {Object} App configuration object
 */
function getAppInfo() {
    return { ...AppConfig };
}

/**
 * Utility function for logging with app prefix
 * @param {string} message - The message to log
 * @param {string} level - Log level (log, warn, error)
 */
function appLog(message, level = 'log') {
    const prefix = `[${AppConfig.name}]`;
    console[level](`${prefix} ${message}`);
}

// Global app utilities
window.FirebaseLooms = {
    getAppInfo,
    appLog,
    showNotification
};

// Welcome message for developers
console.log('%c🔥 Firebase Looms App Developer Console', 'color: #667eea; font-size: 14px; font-weight: bold;');
console.log('Available utilities: FirebaseLooms.getAppInfo(), FirebaseLooms.appLog(), FirebaseLooms.showNotification()');
console.log('For more information, visit:', AppConfig.documentationUrl);

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AppConfig, getAppInfo, appLog, showNotification };
}
