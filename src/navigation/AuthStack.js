import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {screens} from '../constants'
import { LoginScreen } from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name={screens.LOGIN_SCREEN} component={LoginScreen} />
        </Navigator>
    )
}

export default AuthStack;