import { Platform, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { colors, width } from '../../../constants'

export const Container = styled.View`
    width: ${width / 1.1}px;
    align-self: center;
    padding: ${Platform.OS == 'ios' ? 15 : 0}px;
    border-width: 2px;
    border-color: ${colors.accent};
    border-radius: 5px;
    margin-top: 5%;
    margin-bottom: 5%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 3%;
    padding-right: 3%;
`

export const TextInput = styled.TextInput`
    font-size: ${Platform.OS == 'ios' ? 16 : 14}px;
    width: 90%;
`

export const EyeBtn = styled(TouchableOpacity)`
    background-color: transparent;
`
