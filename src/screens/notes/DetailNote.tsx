import { SafeAreaView } from 'react-native'

import { useNotes } from '@/lib/hooks/useNotes'
import { Text } from '@/components/common/Text'

export const DetailNoteScreen = ({ route, navigation }) => {
  const { notes, isLoading, error } = useNotes(route.params.categoryId, route.params.noteId)

  if (isLoading) return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cargando...</Text>
    </SafeAreaView>
  )

  if (notes.length === 0) return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nota no encontrada</Text>
    </SafeAreaView>
  )

  return (
    <SafeAreaView style={{ paddingHorizontal: 22, paddingBottom: 52, paddingTop: 62 }}>
      <Text selectable size='2xl' fontWeight='black'>{notes[0].title}</Text>

      <Text selectable size='base' style={{ marginTop: 12 }}>{notes[0].content}</Text>
    </SafeAreaView>
  )
}