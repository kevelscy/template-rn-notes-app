export type NoteType = 'text' | 'image' | 'audio'

export interface NoteCategory {
  id: string
  description: string
  styles: { bgColor: string, bgImg: string | null }
  title: string
}

export interface Note {
  id: string
  title: string
  content: string
  type: NoteType
}
