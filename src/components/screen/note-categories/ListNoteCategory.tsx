import { View } from 'react-native'

export const ListNoteCategory = ({ children }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 8 }}>
      {children}
    </View>
  )
}
