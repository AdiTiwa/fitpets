import data from './firebase_config.json' assert { type: 'json' };

/* put firebase config in a firebase_config.json file next to this config.ts file */

console.log(data)

export const fire_config = data;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp(fire_config);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app }