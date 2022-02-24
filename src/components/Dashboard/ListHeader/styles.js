import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { colors, width } from '../../../constants'

export const Container = styled.View`
    width: ${width}px;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
    background-color: ${colors.grey};
    flex-direction: row;
    margin-top: 3%;
`

export const Serial = styled.View`
    flex: 0.5;
    margin-left: 6%;
    justify-content: center;
`

export const Name = styled.View`
    flex: 2;
    justify-content: center;
`

export const Attendance = styled.View`
    flex: 0.5;
    align-items: center;
    justify-content: center;
`

export const Inform = styled.View`
    flex: 1;
    justify-content: center;
`

export const Text = styled.Text`
    color: ${props => props.color ? props.color : colors.black};
    font-weight: bold;
`

export const Button = styled(TouchableOpacity)`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.accent};
`

export const Btn = styled(TouchableOpacity)`
    background-color: transparent;
    align-self: center;
    align-items: center;
    justify-content: center;
`

