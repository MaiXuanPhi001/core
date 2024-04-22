import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Setting from '~/screens/setting/Setting';
import TabNavigator from './TabNavigator';
import Detail from '~/screens/detail/Detail';

export type MainStackParamList = {
    TabNavigator: undefined;
    Setting: undefined;
    Detail: undefined;
}

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
            <Stack.Screen name={'Setting'} component={Setting} />
            <Stack.Screen name={'Detail'} component={Detail} />
        </Stack.Navigator>
    )
}

export default MainNavigator