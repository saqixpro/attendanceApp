import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors, screens } from "../constants";
import { DashboardScreen, ScheduleScreen } from "../screens";
import Entypo from 'react-native-vector-icons/Entypo'

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
            <Screen options={{title: "Attendance", tabBarIcon: ( {focused, size, color} )=> (
                <Entypo name="home" color={focused ? colors.accent : colors.grey} size={28} />
            )}} name={screens.DASHBOARD_SCREEN} component={DashboardScreen} />
            <Screen options={{title: "Schedule", tabBarIcon: ( {focused, size, color} )=> (
                <Entypo name="clock" color={focused ? colors.accent : colors.grey} size={28} />
            )}} name={screens.SCHEDULE_SCREEN} component={ScheduleScreen} />
        </Navigator>
    )
}

export default BottomTabs;