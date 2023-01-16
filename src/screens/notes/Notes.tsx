import { SafeAreaView } from 'react-native'

import { useNotes } from '@/lib/hooks/useNotes'
import { Note } from '@/lib/types/notes'

import { NoteCard } from '@/components/screen/notes/NoteCard'
import { Text } from '@/components/common/Text'

export const NotesScreen = ({ route, navigation }) => {
  const { notes, isLoading, error } = useNotes(route.params.categoryId)

  if (isLoading) return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cargando...</Text>
    </SafeAreaView>
  )

  if (notes.length === 0) return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Lista de notas vacia</Text>
    </SafeAreaView>
  )

  return (
    <SafeAreaView style={{ paddingHorizontal: 22, paddingBottom: 52, paddingTop: 52 }}>
      {
        notes.map((note: Note) => (
          <NoteCard
            categoryId={route.params.categoryId}
            navigate={navigation.navigate}
            key={note.id}
            {...note}
          />
        ))
      }
    </SafeAreaView>
  )
}