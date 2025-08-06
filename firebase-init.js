const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-looms-app';
// --- Firebase Initialization ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// --- Helper Functions & Constants ---
const publicPath = (coll) => `artifacts/${appId}/public/data/${coll}`;
const usersPath = () => `artifacts/${appId}/public/data/users`;
