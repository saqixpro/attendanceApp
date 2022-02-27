import React from 'react'
import { colors } from '../../../constants';
import { Container, TextInput } from './styles'

const Input = ({placeholder, onChangeText, secureTextEntry}) => (
    <Container>
        <TextInput placeholderTextColor={colors.darkGrey} onChangeText={onChangeText} placeholder={placeholder} secureTextEntry={secureTextEntry} />
    </Container>
)

export default Input;