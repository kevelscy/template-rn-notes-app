import type { NativeStackScreenProps } from '@react-navigation/native-stack'

type HomeScreenProps = undefined
type SignUpScreenProps = undefined
type SignInScreenProps = undefined
type NoteCategories = undefined
type Notes = undefined
type CreateNote = undefined
type CreateCategory = undefined
type EditCategory = undefined
type DetailNote = undefined
type EditNote = undefined

export type ScreenProps = NativeStackScreenProps<{
  Home: HomeScreenProps
  SignUp: SignUpScreenProps
  SignIn: SignInScreenProps
  NoteCategories: NoteCategories
  Notes: Notes
  CreateNote: CreateNote
  CreateCategory: CreateCategory
  EditCategory: EditCategory
  DetailNote: DetailNote
  EditNote: EditNote
}>
