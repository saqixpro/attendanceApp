import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { colors, height, width } from '../../../constants'

export const Container = styled.View`
    width: ${width / 1.05}px;
    height: ${height / 10}px;
    flex-direction: row;
`

export const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const LeftSection = styled.View`
    flex: 2;
    justify-content: flex-end;
`

export const RightSection = styled.View`
    flex: 1;
    justify-content: flex-end;
`

export const StatsContainer = styled.View`
    height: 50%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-left-width: 3px;
    border-right-width: 3px;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: ${colors.accent};
    padding: 5px;
    border-radius: 10px;
`   

export const TotalAttendance = styled.Text`
    font-size: 22px;
` 

export const AttendanceContainer = styled.View`
    flex-direction: row;
    width: 70%;
    align-self: center;
    align-items: center;
    justify-content: space-evenly;
`

export const AttendanceBlock = styled.View`
    flex: 1;
    align-items: center;
`

export const Text = styled.Text`
    font-size: ${props => props.fontSize ? props.fontSize : 16}px;
`

export const DateButton = styled(TouchableOpacity)`
    background-color: transparent;
    padding: 8px;
    margin-top: 1%;
    padding-left: 5%;
    justify-content: center;
`