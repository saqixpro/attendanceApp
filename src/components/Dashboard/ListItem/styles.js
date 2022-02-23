import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../../../constants'

export const Container = styled.View`
    flex-direction: row;
    padding: 3%;
` 

export const NameContainer = styled.View`
    flex: 2;
    padding-left: 3%;
`

export const AttendanceButton = styled(TouchableOpacity)`
    flex: 0.5;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.red ? colors.error : "transparent"};
`

export const SerialContainer = styled.View`
    flex: 0.5;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: relative;
    padding-left: 3%;
`

export const InformContainer = styled.View`
    flex: 1;
`

export const Text = styled.Text`
    font-size: ${props => props.fontSize ? props.fontSize : 14}px;
    font-weight: ${props => props.bold ? "bold" : 'normal'};
    color: ${props => props.white ? colors.white : props.color ? props.color : colors.black};
    align-self: ${props => props.center ? 'center' : 'flex-start'};
    text-decoration: ${props => props.underline ? "underline" : 'none'};
`

export const WarningButton = styled(TouchableOpacity)`
    width: 20px;
    height: 20px;
    background-color: ${colors.error};
    align-items: center;
    justify-content: center;
    position: absolute;
    left: -3px;
    border-radius: 50px;
`

export const InformButton = styled(TouchableOpacity)`
    background-color: transparent;
    align-items: center;
    justify-content: center;
`






