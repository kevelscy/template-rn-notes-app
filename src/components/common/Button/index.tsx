import { TouchableOpacityProps } from '@/lib/types/core'
import { Wrapper, Text } from './styles'

interface ButtonProps extends TouchableOpacityProps {}

export const Button = ({ ...props }: ButtonProps) => {
  return (
    <Wrapper {...props}>
      <Text style={{ textAlign: 'center' }}>{props.children}</Text>
    </Wrapper>
  )
}