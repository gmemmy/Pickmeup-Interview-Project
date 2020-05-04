import React, { useEffect, useContext, useState } from 'react';
import { AsyncStorage, NativeModules, PermissionsAndroid } from 'react-native'
import LoginView from '../../component/view/auth/login';
import * as AppAuth from 'expo-app-auth';
import Context from '../../utils/context'

const Login = ({ navigation }) => {
  const context = useContext(Context)
  let [authState, setAuthState] = useState(null);

  useEffect(() => {
    (async () => {
      let cachedAuth = await getCachedAuthAsync();
      if (cachedAuth && !authState) {
        setAuthState(cachedAuth);
      }
    })();
  }, []);

   async function signInAsync(config) {
    let authState = await AppAuth.authAsync(config);
    await cacheAuthAsync(authState);
    return authState;
  }

  let config = {
    issuer: 'https://accounts.google.com',
    iosClientId:
    '788969251097-ahefl5ac88ku71okigfl2ojv1083hqoj.apps.googleusercontent.com',
    androidClientId:
    '788969251097-tel2of1angqamkd937eq6m8e8qveo6mc.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  };
  
  let StorageKey = '@MyApp:CustomGoogleOAuthKey';
  
  async function cacheAuthAsync(authState) {
    return await AsyncStorage.setItem(StorageKey, JSON.stringify(authState));
  }
  
  async function getCachedAuthAsync() {
    let value = await AsyncStorage.getItem(StorageKey);
    let authState = JSON.parse(value);
    if (authState) {
      if (checkIfTokenExpired(authState)) {
        return refreshAuthAsync(authState);
      } else {
        return authState;
      }
    }
    return null;
  }
  
  function checkIfTokenExpired({ accessTokenExpirationDate }) {
    return new Date(accessTokenExpirationDate) < new Date();
  }
  
  async function refreshAuthAsync({ refreshToken }) {
    let authState = await AppAuth.refreshAsync(config, refreshToken);
    console.log('refreshAuth', authState);
    await cacheAuthAsync(authState);
    return authState;
  }
  
  async function signOutAsync({ accessToken }) {
    try {
      await AppAuth.revokeAsync(config, {
        token: accessToken,
        isClientIdProvided: true,
      });
      await AsyncStorage.removeItem(StorageKey);
      return null;
    } catch (e) {
      alert(`Failed to revoke token: ${e.message}`);
    }
  }

  return <LoginView onButtonPress={async () => {
    const _authState = await signInAsync();
    setAuthState(_authState);
  }} 
  navigation={navigation} />;
};

export default Login;
