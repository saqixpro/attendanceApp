import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {screens} from '../constants'
import DashboardScreen from '../screens/Dashboard';

const {Navigator, Screen} = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name={screens.DASHBOARD_SCREEN} component={DashboardScreen} />
        </Navigator>
    )
}

export default AppStack;