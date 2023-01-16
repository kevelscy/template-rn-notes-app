import { collection, doc } from 'firebase/firestore'
import { firebaseDB } from './index'

export const NOTE_DB_REF = (categoryID: string, noteId) => doc(firebaseDB, 'noteCategories', categoryID, 'notes', noteId)
export const NOTES_DB_REF = (categoryID: string) => collection(firebaseDB, 'noteCategories', categoryID, 'notes')
export const NOTE_CATEGORIES_REF = collection(firebaseDB, 'noteCategories')
