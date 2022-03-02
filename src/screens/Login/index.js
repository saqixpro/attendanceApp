import React, {useRef, useState } from 'react'
import { LOGO } from '../../assets';
import { AppLoading, Login } from '../../components';
import { actions, colors, screens } from '../../constants';
import { Body, Button, Container, Logo, LogoContainer, MainButton, Text } from './styles'
import api from '../../api'
import { useDispatch } from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
const LoginScreen = () => {
    const [showingForgotPassword , setShowingForgotPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const dropdownRef = useRef(null);

    const login = async () => {
        try {
            setLoading(true);
            const result = await api.loginWithEmailAndPassword(email, password);
            if(result.SvcStatus == 'Failure'){
                dropdownRef.current.alertWithType("error", '', result.SvcMsg);
            } else if (result.SvcStatus == 'Success') {
                console.log(result.tokenId);
                dispatch({type: actions.LOGIN, payload: {user: result}})
            }
        } catch(error){
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const forgotPassword = async () => {
        try {
            setLoading(true);
            const res = await api.resetPassword(email);
            dropdownRef.current.alertWithType(res.SvcStatus == 'Failure' ? "error" : 'success', '', res.SvcMsg)
        } catch(error){
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const toggleForgotPassword = () => setShowingForgotPassword(prev => {
        setEmail("");
        return !prev;
    })
    
    return (
     <Container>
           {loading ? <AppLoading /> : (
                <>
                <LogoContainer>
                    <Logo source={LOGO} />
                </LogoContainer>
                <Body>
                   {!showingForgotPassword ? (
                        <>
                        <Login.Input placeholder="Email" onChangeText={text => setEmail(text)} />
                        <Login.Input placeholder="Password" password onChangeText={text => setPassword(text)} />
                        <Button onPress={toggleForgotPassword}>
                            <Text color={colors.primary}>Forgot Passowrd</Text>
                        </Button>
                        <MainButton onPress={login}>
                            <Text color={colors.white}>Login</Text>
                        </MainButton>
                        </>
                   ) : (
                       <>
                        <Login.Input placeholder="Email" onChangeText={text => setEmail(text)} />
                        <MainButton onPress={forgotPassword}>
                            <Text color={colors.white}>Reset Password</Text>
                        </MainButton>
                        <Button center onPress={toggleForgotPassword}>
                            <Text color={colors.primary}>Cancel</Text>
                        </Button>
                       </>
                   )}
                </Body>
                </>
           )}
            <DropdownAlert ref={dropdownRef} />
        </Container>
    )
}

export default LoginScreen;