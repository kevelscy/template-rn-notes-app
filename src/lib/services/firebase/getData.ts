import { getDoc, getDocs } from 'firebase/firestore'
import { NOTES_DB_REF, NOTE_CATEGORIES_REF, NOTE_DB_REF } from './refs'

export const getNoteDB = async (categoryId: string, noteId: string) => await getDoc(NOTE_DB_REF(categoryId, noteId))
export const getAllNotesDB = async (categoryId: string) => await getDocs(NOTES_DB_REF(categoryId))
export const getAllNoteCategoriesDB = async () => await getDocs(NOTE_CATEGORIES_REF)
