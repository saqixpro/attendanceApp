import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../../../constants'

export const Container = styled.View`
    flex-direction: row;
    padding: 2%;
    background-color: ${colors.white};
` 

export const TimeContainer = styled.View`
    flex: 2.7;
    justify-content: center;
`

export const ClassContainer = styled.View`
    flex: 1;
`

export const StatsContainer = styled.View`
    flex: 3;
    flex-direction: row;
    align-items: center;
`

export const Stat = styled.View`
    flex: 0.3;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const Sub = styled.View`
    flex: 0.7;
`

export const Button = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
`

export const LunchContainer = styled.View`
    flex: 4;
    background-color: rgba(0,0,0,0.1);   
    padding: 10px;
`

export const Text = styled.Text`
    padding: 3px;
    font-size: ${props => props.fontSize ? props.fontSize : 14}px;
    font-weight: ${props => props.bold ? "bold" : 'normal'};
    color: ${props => props.white ? colors.white : props.color ? props.color : colors.black};
    align-self: ${props => props.center ? 'center' : 'flex-start'};
    text-decoration: ${props => props.underline ? "underline" : 'none'};
    margin-top: ${props => props.margined ? 1 : 0}px;
    margin-bottom: ${props => props.margined ? 1 : 0}px;
`







