import { TouchableOpacityProps, ViewProps } from 'react-native'
import { WrapperCardTouchable, WrapperCardView } from './styles'

export interface CardProps extends ViewProps, TouchableOpacityProps {
  isTouchable?: boolean
}

export const Card = ({ ...props }: CardProps) => {
  if (props.isTouchable) return (
    <WrapperCardTouchable {...props}>
      {props.children}
    </WrapperCardTouchable>
  )

  return (
    <WrapperCardView {...props}>
      {props.children}
    </WrapperCardView>
  )
}