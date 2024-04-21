import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Hello from '../screens/Hello';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'Hello'} component={Hello} />
                <Stack.Screen name={'AuthNavigator'} component={AuthNavigator} />
                <Stack.Screen name={'MainNavigator'} component={MainNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation