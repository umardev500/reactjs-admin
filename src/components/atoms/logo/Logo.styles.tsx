import styled from 'styled-components'

type Props = {}

const StyledLogo = styled.div<Props>`
  height: 64px;
  width: calc(100% - 1px);
`

export const StyledLogoText = styled.span`
  font-family: Roboto;
`

export default StyledLogo
