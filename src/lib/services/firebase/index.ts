import { initializeApp, FirebaseApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import { config } from '@/config'

let firebaseApp: FirebaseApp | undefined

if (!getApps().length) {
  firebaseApp = initializeApp(config.FIREBASE.INIT_APP)
}

export const firebaseDB = getFirestore(firebaseApp)
export const firebaseStorage = getStorage(firebaseApp)
export const firebaseAuth = getAuth(firebaseApp)
