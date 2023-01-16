import { SafeAreaView} from 'react-native'
import { useForm } from 'react-hook-form'

import { InputText } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { Text } from '@/components/common/Text'

interface formData {
  title: string
  description: string
}

export const CreateCategoryScreen = () => {
  const { control, getValues, formState: { errors } } = useForm<formData>()

  const onSubmit = async () => {
    const { title, description } = getValues()

    console.log({ title, description })
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 22, paddingBottom: 52, paddingTop: 52 }}>
      <Text size='2xl' fontWeight='black'>Crear Categoria de Notas</Text>

      <InputText
        name='title'
        placeholder='Título de la Categoria'
        control={control}
        rules={{required: 'Título requerido'}}
      />

      <InputText
        name='description'
        placeholder='Descripción (Opcional)'
        secureTextEntry
        control={control}
      />

      <Button onPress={onSubmit}>
        Crear Categoria
      </Button>
    </SafeAreaView>
  )
}
