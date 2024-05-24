// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import ReactGA from 'react-ga4';

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.GA4_TRACKING_ID,
// };

export const configureAnalytics = () => {
  ReactGA.initialize([
    {
      trackingId: process.env.GA4_TRACKING_ID || '',
    },
  ]);
};

//export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);

export const sendPageEvent = (path: string, title: string) => {
  ReactGA.send({ hitType: 'pageview', page: path, title: title });
};

export const sendCustomEvent = (category: string, action: string) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};
