import React from 'react'
import { LOGO } from '../../assets'
import { Login } from '../../components'
import { colors } from '../../constants'
import { Body, Container, Logo, Text, LogoContainer, MainButton } from './styles'

const ForgotPassowrd = () => {
    return (
        <Container>
            <LogoContainer>
                <Logo source={LOGO} />
            </LogoContainer>
            <Body>
                <Login.Input placeholder="Email" />
                <MainButton>
                    <Text color={colors.white}>Reset Password</Text>
                </MainButton>
            </Body>
        </Container>
    )
}

export default ForgotPassowrd;