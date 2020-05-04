import styled from 'styled-components/native';
import Text from '../../widget/text';

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 37px;
  width: 142px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.powderWhite}
  border-width: 0.6px;
  border-color: ${props => props.theme.colors.blue}
`
export const ButtonText = styled(Text)`
  font-size: ${props => props.theme.fontSizes.small}px;
  color: ${props => props.color};
  font-weight: 500
`;

export const ButtonIcon = styled.Image`
  height: 23px;
  width: 23px;
  resize-mode: contain
`
export const InnerButtonContainer = styled.View`
  background-color: ${props => props.theme.colors.blue}
  height: 37px
  width: 100px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  left: 7px
`