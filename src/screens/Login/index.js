import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { LOGO } from '../../assets';
import { Login } from '../../components';
import { colors, screens } from '../../constants';
import { Body, Button, Container, Logo, LogoContainer, MainButton, Text } from './styles'

const LoginScreen = () => {
    const navigation = useNavigation();
    const [showingForgotPassword , setShowingForgotPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        navigation.navigate(screens.DASHBOARD_SCREEN);
    }

    const toggleForgotPassword = () => setShowingForgotPassword(prev => {
        setEmail("");
        return !prev;
    })
    
    return (
        <Container>
            <LogoContainer>
                <Logo source={LOGO} />
            </LogoContainer>
            <Body>
               {!showingForgotPassword ? (
                    <>
                    <Login.Input placeholder="Email" />
                    <Login.Input placeholder="Password" secureTextEntry />
                    <Button onPress={toggleForgotPassword}>
                        <Text color={colors.primary}>Forgot Passowrd</Text>
                    </Button>
                    <MainButton onPress={login}>
                        <Text color={colors.white}>Login</Text>
                    </MainButton>
                    </>
               ) : (
                   <>
                    <Login.Input placeholder="Email" />
                    <MainButton>
                        <Text color={colors.white}>Reset Password</Text>
                    </MainButton>
                    <Button center onPress={toggleForgotPassword}>
                        <Text color={colors.primary}>Cancel</Text>
                    </Button>
                   </>
               )}
            </Body>
        </Container>
    )
}

export default LoginScreen;