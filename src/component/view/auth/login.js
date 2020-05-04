import React, { useState } from 'react';
import { TextInput } from 'react-native'
import Theme from '../../../utils/theme'
import { HeaderText, SubText, Container, HeaderContainer,
  SubTextContainer, Logo, PhoneInputContainer, BottomTextContainer,
  BottomText, ContentContainer, BottomView, GoButton, GoButtonText, 
  styles, CountryMumberCode } from './styles';

import CountryPicker from 'react-native-country-picker-modal'

// components
import Button from '../../widget/button'

// images
const logo = require('../../../../assets/logo.png')
const facebook = require('../../../../assets/facebook.png')
const google = require('../../../../assets/google.png')

const Login = ({ onButtonPress, navigation }) => {
  const [country, setCountry] = useState(null)
  const [countryCode, setCountryCode] = useState('NG')
  const [withFlag] = useState(true)
  const [visible] = useState(false)
  const [withCallingCode, setWithCallingCode] = useState(true)

  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }

  return (
    <Theme>
      <Container>
        <HeaderContainer>
          <Logo source={logo} />
          <HeaderText>Pickmeup</HeaderText>
        </HeaderContainer>
        <SubTextContainer>
          <SubText fontWeight='bold'>Hey there!</SubText>
          <SubText fontWeight='normal'>
            Type in your phone number to get started
          </SubText>
        </SubTextContainer>
        <ContentContainer>
          <PhoneInputContainer>
            <CountryPicker
              {...{
              countryCode: countryCode,
              withFlag,
              onSelect,
              withCallingCode,
              }}
              visible={visible}
            />
            <CountryMumberCode>
              +{!country?.callingCode ? 234 : country.callingCode}
              </CountryMumberCode>
            <TextInput keyboardType='numeric' style={styles.phoneInput} />
          </PhoneInputContainer>
          <GoButton onPress={() => navigation.navigate('Home')}>
            <GoButtonText fontWeight='normal'>GO</GoButtonText>
          </GoButton>
        </ContentContainer>
        <BottomTextContainer>
          <BottomText>
            or you can sign in with
          </BottomText>
        </BottomTextContainer>
      </Container>
      <BottomView>
        <Button type='facebook' buttonText='Facebook' 
          backgroundColor={props => props.theme.colors.powderWhite}
          icon={facebook} textColor={props => props.theme.colors.ash}
          pressed={onButtonPress}
        />
        <Button type='google' buttonText='Google' icon={google} 
          textColor={props => props.theme.colors.powderWhite}
          pressed={onButtonPress}
        />
      </BottomView>
    </Theme>
  );
};

export default Login;
