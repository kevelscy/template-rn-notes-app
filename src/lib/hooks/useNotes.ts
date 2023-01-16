import { useEffect, useState } from 'react'

import { getAllNotesDB, getNoteDB } from '@/lib/services/firebase/getData'
import { Note } from '../types/notes'

export const useNotes = (categoryId: string, noteId?: string) => {
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const _getAllNotesCategories = async () => {
    try {
      setIsLoading(true)
      const data = await getAllNotesDB(categoryId)
      const allNotes = data.docs.map(note => { return { id: note.id, ...note.data() }})

      setNotes(allNotes as Note[])
      setIsLoading(false)
    } catch (err) {
      console.error('useNotes | getAllCategories', err)
      setError(JSON.stringify(err))
    }
  }

  const _getNoteDetail = async () => {
    try {
      setIsLoading(true)
      const doc = await getNoteDB(categoryId, noteId)
      const note = [{ id: doc.id, ...doc.data() }]

      setNotes(note as Note[])
      setIsLoading(false)
    } catch (err) {
      console.error('useNotes | getNoteDetail', err)
      setError(JSON.stringify(err))
    }
  }

  useEffect(() => {
    noteId ? _getNoteDetail() : _getAllNotesCategories()
  }, [categoryId, noteId])

  return {
    notes,
    isLoading,
    error
  }
}