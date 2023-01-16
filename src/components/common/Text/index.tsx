import { TextProps } from '@/lib/types/core'
import { TFontWeight } from '@/lib/types/ui'
import {
  TextXS,
  TextSM,
  TextBASE,
  TextLG,
  TextXL,
  Text2XL,
  Text3XL,
  Text4XL,
  Text5XL,
  Text6XL,
  Text7XL,
  Text8XL,
  Text9XL
} from './styles'

interface TextStyledProps extends TextProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
  fontWeight?: TFontWeight
}

export const Text = ({ size, ...props }: TextStyledProps) => {
  if (size === 'xs') return <TextXS {...props}>{props.children}</TextXS>
  if (size === 'sm') return <TextSM {...props}>{props.children}</TextSM>
  if (size === 'base') return <TextBASE {...props}>{props.children}</TextBASE>
  if (size === 'lg') return <TextLG {...props}>{props.children}</TextLG>
  if (size === 'xl') return <TextXL {...props}>{props.children}</TextXL>
  if (size === '2xl') return <Text2XL {...props}>{props.children}</Text2XL>
  if (size === '3xl') return <Text3XL {...props}>{props.children}</Text3XL>
  if (size === '4xl') return <Text4XL {...props}>{props.children}</Text4XL>
  if (size === '5xl') return <Text5XL {...props}>{props.children}</Text5XL>
  if (size === '6xl') return <Text6XL {...props}>{props.children}</Text6XL>
  if (size === '7xl') return <Text7XL {...props}>{props.children}</Text7XL>
  if (size === '8xl') return <Text8XL {...props}>{props.children}</Text8XL>
  if (size === '9xl') return <Text9XL {...props}>{props.children}</Text9XL>

  return (
    <TextBASE {...props}>{props.children}</TextBASE>
  )
}