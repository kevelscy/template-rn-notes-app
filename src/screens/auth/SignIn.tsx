import { View } from 'react-native'
import { useForm } from 'react-hook-form'

import { InputText } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { signIn } from '@/lib/services/auth'

interface formData {
  email: string
  password: string
}

export const SignInScreen = () => {
  const { control, handleSubmit, getValues, formState: { errors } } = useForm<formData>()

  const onSubmit = async () => {
    const { email, password } = getValues()

    const data = await signIn(email, password)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <InputText
          name="email"
          placeholder="email@gmail.com"
          control={control}
          rules={{required: 'Email is required'}}
        />

        <InputText
          name="password"
          placeholder="password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

      <Button onPress={onSubmit}>
        Iniciar Sesion
      </Button>
    </View>
  )
}
