import { View } from 'react-native'

import { ScreenProps } from '@/lib/types/screens'
import { Text } from '@/components/common/Text'
import { Button } from '@/components/common/Button'

export const HomeScreen = ({ navigation }: ScreenProps) => {
  const navigate = navigation.navigate

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        fontWeight='bold' 
        size='4xl'
        style={{ textAlign: 'center' }}
      >
        Inicio
      </Text>

      <Button onPress={() => navigate('CreateCategory')}>
        Crear Categoria de Notas
      </Button>
    </View>
  )
}