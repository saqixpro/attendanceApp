import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {screens} from '../constants'
import { LoginScreen, ForgotPassowrd, DashboardScreen } from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name={screens.LOGIN_SCREEN} component={LoginScreen} />
            <Screen name={screens.FORGOT_PASSWORD} options={{headerShown: true, title: "Forgot Password"}} component={ForgotPassowrd} />
            <Screen name={screens.DASHBOARD_SCREEN} component={DashboardScreen} />
        </Navigator>
    )
}

export default AppStack;