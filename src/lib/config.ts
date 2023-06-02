let process: any;

const p = process?.env ? process.env : import.meta.env;

/* add config to a .env file in the base directory (next to .gitignore, .npmrc, etc.) with the variable names below */

export const fire_config = {
    apiKey: p.FIREBASE_apiKey,
    authDomain: p.FIREBASE_authDomain,
    projectId: p.FIREBASE_projectId,
    storageBucket: p.FIREBASE_storageBucket,
    messagingSenderId: p.FIREBASE_messagingSenderId,
    appId: p.FIREBASE_appId,
    measurementId: p.FIREBASE_measurementId
}