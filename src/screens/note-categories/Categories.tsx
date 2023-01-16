import { SafeAreaView } from 'react-native'

import { useNoteCategories } from '@/lib/hooks/useNoteCategories'
import { NoteCategory } from '@/lib/types/notes'

import { NoteCategoryCard } from '@/components/screen/note-categories/NoteCategoryCard'
import { ListNoteCategory } from '@/components/screen/note-categories/ListNoteCategory'
import { Text } from '@/components/common/Text'

export const CategoriesScreen = ({ navigation }) => {
  const { noteCategories, isLoading } = useNoteCategories()

  if (isLoading) return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cargando...</Text>
    </SafeAreaView>
  )


  if (noteCategories.length === 0) return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Categorias de Notas Vacia</Text>
    </SafeAreaView>
  )

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 22, paddingVertical: 52 }}>
      <Text size='2xl' fontWeight='bold'>Categorias</Text>

        <ListNoteCategory>
          {
            noteCategories.map((category: NoteCategory) => (
              <NoteCategoryCard navigate={navigation.navigate} key={category.id} {...category} />
            ))
          }
        </ListNoteCategory>
    </SafeAreaView>
  )
}