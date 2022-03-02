import React, { useState } from 'react'
import { colors } from '../../../constants';
import { Container, EyeBtn, TextInput } from './styles'
import Entypo from 'react-native-vector-icons/Entypo'

const Input = ({placeholder, onChangeText, password,}) => {
    const [secureTextEntry, setSecureTextEntry] = useState(() => {
        return !!password ? true : false;
    });

    return (
        <Container>
            <TextInput placeholderTextColor={colors.darkGrey} onChangeText={onChangeText} placeholder={placeholder} secureTextEntry={secureTextEntry} />
            {password && (
                <EyeBtn onPress={() => setSecureTextEntry(!secureTextEntry)}>
                    <Entypo name={secureTextEntry ? 'eye-with-line' : 'eye'} size={20} color={colors.green} />
                </EyeBtn>
            )}
        </Container>
    )
}

export default Input;