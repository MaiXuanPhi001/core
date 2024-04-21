import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '~/screens/auth/login/Login';
import Register from '~/screens/auth/register/Register';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Register'} component={Register} />
    </Stack.Navigator>
  )
}

export default AuthNavigator