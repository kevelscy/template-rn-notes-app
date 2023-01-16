import { useEffect, useState } from 'react'

import { getAllNoteCategoriesDB } from '@/lib/services/firebase/getData'

export const useNoteCategories = () => {
  const [noteCategories, setNoteCategories] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const _getAllNotesCategories = async () => {
    try {
      setIsLoading(true)
      const data = await getAllNoteCategoriesDB()
      const allNoteCategories = data.docs.map(category => { return { id: category.id, ...category.data() }})

      setNoteCategories(allNoteCategories)
      setIsLoading(false)
    } catch (err) {
      console.error('useNoteCategories | getAllCategories', err)
      setError(JSON.stringify(err))
    }
  }

  useEffect(() => {
    _getAllNotesCategories()
  }, [])

  return {
    noteCategories,
    isLoading,
    error
  }
}