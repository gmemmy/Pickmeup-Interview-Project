import styled from 'styled-components/native';
import Text from '../../widget/text';
import { StyleSheet } from 'react-native'
import { getHeight, getWidth } from '../../../utils/helpers'

export const styles = StyleSheet.create({
  phoneInput: {
    height: getHeight(43),
    width: getWidth(160),
    borderTopRightRadius: getWidth(5),
    borderBottomRightRadius: getWidth(5),
    marginLeft: getWidth(20),
    borderLeftColor: '#767676',
    borderLeftWidth: getWidth(1),
    fontSize: getHeight(17),
    color: '#767676',
    paddingLeft: getWidth(10)
  }
})

export const Container = styled.View`
  flex: 0.9;
  background-color: ${props => props.theme.colors.blue};
`
export const HeaderText = styled(Text)`
  padding-left: ${getWidth(15)}px;
  font-size: ${props => getHeight(props.theme.fontSizes.large)}px;
  color: ${props => props.theme.colors.powderWhite};
`;

export const SubText = styled(Text)`
  padding-left: ${getWidth(10)}px;
  font-size: ${props => getHeight(props.theme.fontSizes.medium)}px;
  color: ${props => props.theme.colors.powderWhite};
  font-weight: ${props => props.fontWeight}
`;

export const SubTextContainer = styled.View`
  padding-left: ${getWidth(20)}px;
  margin-top: ${getHeight(30)}px;
  height: ${getHeight(100)}px;
  max-width: ${getWidth(330)}px;
  justify-content: space-between
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: ${getWidth(30)}px;
  margin-top: ${getHeight(20)}px;
`

export const Logo = styled.Image`
  height: ${getHeight(53)}px;
  width: ${getWidth(53)}px;
`
export const PhoneInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.powderWhite};
  width: ${getWidth(260)}px;
  height: ${getHeight(43)}px;
  margin-left: ${getWidth(10)}px;
  border-radius: ${getWidth(5)}px
  paddingLeft: ${getWidth(10)}px;
`

export const BottomTextContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding-bottom: ${getHeight(15)}px;
`

export const BottomText = styled(Text)`
  font-size: ${props => getHeight(props.theme.fontSizes.small)}px;
  color: ${props => props.theme.colors.powderWhite};
`

export const BottomView = styled.View`
  flex-direction: row;
  top: ${getHeight(20)}px;
  justify-content: space-evenly;
`

export const ContentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${getHeight(50)}px;
  justify-content: space-evenly
`

export const GoButton = styled.TouchableOpacity`
  height: ${getHeight(43)}px;
  width: ${getWidth(50)}px;
  background-color: ${props => props.theme.colors.blue};
  align-items: center;
  justify-content: center;
  border-radius: ${getWidth(5)}px;
  border-width: ${getHeight(1)}px;
  border-color: ${props => props.theme.colors.powderWhite};
`

export const GoButtonText = styled(Text)`
  font-size: ${props => getHeight(props.theme.fontSizes.small)}px;
  color: ${props => props.theme.colors.powderWhite};
  font-weight: ${props => props.fontWeight}
`

export const CountryMumberCode = styled(Text)`
  font-size: ${getHeight(17)}px;
  color: ${props => props.theme.colors.black};
`