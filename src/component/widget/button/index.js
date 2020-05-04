import React from 'react'
import { ButtonContainer, ButtonText, ButtonIcon, InnerButtonContainer } from './styles'

const Button = ({ backgroundColor, icon, buttonText, type, textColor, pressed }) => {
  return (
    <ButtonContainer onPress={pressed} backgroundColor={backgroundColor}>
      <ButtonIcon source={icon} />
      {type === 'google' ? (
        <InnerButtonContainer>
          <ButtonText color={textColor}>
            {buttonText}
          </ButtonText>
        </InnerButtonContainer>
      ) : (
        <ButtonText color={textColor}>{buttonText}</ButtonText>
      )}
    </ButtonContainer>
  )
}

export default Button
