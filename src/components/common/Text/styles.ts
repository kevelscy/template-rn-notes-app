import { styled, theme } from '@/styles/shared'
import { TFontWeight } from '@/lib/types/ui'

type TextBaseStyledProps = {
  fontWeight?: TFontWeight
}

export const TextBaseStyled = styled.Text<TextBaseStyledProps>`
  color: ${theme.colors.gray[800]};
  font-weight: ${props => {
    if (props.fontWeight === 'thin') return '100'
    if (props.fontWeight === 'extralight') return '200'
    if (props.fontWeight === 'light') return '300'
    if (props.fontWeight === 'normal') return '400'
    if (props.fontWeight === 'medium') return '500'
    if (props.fontWeight === 'semibold') return '600'
    if (props.fontWeight === 'bold') return '700'
    if (props.fontWeight === 'extrabold') return '800'
    if (props.fontWeight === 'black') return '900'
    else return '400'
  }};
`

export const TextXS = styled(TextBaseStyled)`
  font-size: 12px;
  line-height: 16px;
`

export const TextSM = styled(TextBaseStyled)`
  font-size: 14px;
  line-height: 20;px;
`

export const TextBASE = styled(TextBaseStyled)`
  font-size: 16px;
  line-height: 24px;
`

export const TextLG = styled(TextBaseStyled)`
  font-size: 18px;
  line-height: 28px;
`

export const TextXL = styled(TextBaseStyled)`
  font-size: 20px;
  line-height: 28px;
`

export const Text2XL = styled(TextBaseStyled)`
  font-size: 24px;
  line-height: 32px;
`

export const Text3XL = styled(TextBaseStyled)`
  font-size: 30px;
  line-height: 36px;
`

export const Text4XL = styled(TextBaseStyled)`
  font-size: 36px;
  line-height: 40px;
`

export const Text5XL = styled(TextBaseStyled)`
  font-size: 48px;
  line-height: 60px;
`

export const Text6XL = styled(TextBaseStyled)`
  font-size: 60px;
  line-height: 62px;
`

export const Text7XL = styled(TextBaseStyled)`
  font-size: 72px;
  line-height: 74px;
`

export const Text8XL = styled(TextBaseStyled)`
  font-size: 96px;
  line-height: 100px;
`


export const Text9XL = styled(TextBaseStyled)`
  font-size: 128px;
  line-height: 120px;
`
