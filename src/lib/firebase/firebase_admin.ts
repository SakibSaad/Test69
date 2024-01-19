import { initializeApp, getApps, cert, AppOptions } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
import { getFirestore } from "firebase-admin/firestore";

const firebaseAdminConfig: AppOptions = {
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
};

const fireAdminApp =
  getApps().length > 0 ? getApps()[0] : initializeApp(firebaseAdminConfig);

const fireAdminFire = getFirestore(fireAdminApp);
const fireAdminDB = getDatabase(fireAdminApp);

export { fireAdminDB, fireAdminFire };
