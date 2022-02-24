import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { colors, width } from '../../../constants'

export const Container = styled.View`
    width: ${width / 1.1}px;
    align-self: center;
    padding: 15px;
    border-width: 2px;
    border-color: ${colors.accent};
    border-radius: 5px;
    margin-top: 5%;
    margin-bottom: 5%;
`

export const TextInput = styled.TextInput`
    font-size: 16px;
`
