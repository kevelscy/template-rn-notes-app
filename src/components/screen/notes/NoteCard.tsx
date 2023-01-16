import { Note } from '@/lib/types/notes'

import { Card } from '@/components/common/Card'
import { TextLG } from '@/components/common/Text/styles'

interface NoteCardProps extends Note {
  navigate: any
  categoryId: string
}

export const NoteCard = ({ id, categoryId, title, navigate }: NoteCardProps) => {
  return (
    <Card
      isTouchable
      onPress={() => navigate('DetailNote', { categoryId: categoryId, noteId: id })}
      style={{ width: '100%', maxHeight: 82, marginTop: 12 }}
    >
      <TextLG selectable fontWeight='bold'>{title}</TextLG>
    </Card>
  )
}
