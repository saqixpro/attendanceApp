import React from 'react'
import { colors } from '../../../constants';
import { Container, TextInput } from './styles'

const Input = ({placeholder, secureTextEntry}) => (
    <Container>
        <TextInput placeholderTextColor={colors.darkGrey} placeholder={placeholder} secureTextEntry={secureTextEntry} />
    </Container>
)

export default Input;