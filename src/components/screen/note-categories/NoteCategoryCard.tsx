import { NoteCategory } from '@/lib/types/notes'
import { Card } from '@/components/common/Card'
import { TextXL } from '@/components/common/Text/styles'

interface NoteCategoryCardProps extends NoteCategory {
  navigate: any
}

export const NoteCategoryCard = ({ id, title, description, styles, navigate }: NoteCategoryCardProps) => {
  return (
    <Card
      isTouchable
      style={{
        maxWidth: 150,
        width: '100%',
        maxHeight: 100,
        height: '100%',
        marginTop: 12,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onPress={() => navigate('Notes', { categoryId: id })}
    >
      <TextXL fontWeight='bold'>{title}</TextXL>
    </Card>
  )
}
