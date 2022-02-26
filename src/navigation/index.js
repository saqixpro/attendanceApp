import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import BottomTabs from './Tab'
import { useSelector } from 'react-redux'
import { selectors } from '../constants'

const MainNav = () => {
    const loggedIn = useSelector(selectors.getLoginStatus);
    return (
        <NavigationContainer>
           {loggedIn ? <BottomTabs /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default MainNav;