import React, { ReactNode } from 'react'
import StyledLogo, { StyledLogoText } from './Logo.styles'

type Props = {
  text?: string | ReactNode | undefined
  icon?: string | undefined
}

export const Logo: React.FC<Props> = ({ icon, text }) => (
  <StyledLogo className="bg-white flex items-center px-4 border-b">
    {icon && <img src={icon} alt="logo" />}
    <StyledLogoText className="text-xl cursor-default font-semibold text-slate-700 ml-4">
      {text || 'Text'}
    </StyledLogoText>
  </StyledLogo>
)
