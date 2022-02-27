import { Platform, TouchableOpacity } from 'react-native'
import { Surface } from 'react-native-paper'
import styled from 'styled-components/native'
import { colors, height, width } from '../../../constants'

export const Container = styled(Surface)`
    width: ${width}px;
    height: ${height / 9}px;
    padding-left: 2%;
    padding-right: 2%;
    flex-direction: row;
`

export const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.3);
`

export const CalendarContainer = styled.View`
    background-color: ${colors.white};
    padding: 10px;
    border-radius: 10px;
    width: ${width / 1.05}px;
`

export const LeftSection = styled.View`
    flex: 2;
    padding-top: 5%;
    justify-content: center;
`

export const RightSection = styled.View`
    flex: 1.5;
    justify-content: center;
`

export const StatsContainer = styled.View`
    height: ${Platform.OS == 'ios' ? 60 : 70}%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-left-width: 3px;
    border-right-width: 3px;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: ${colors.accent};
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 10px;
`   

export const TotalAttendance = styled.Text`
    font-size: 22px;
    text-align: center;
    width: 30%;
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
    font-size: ${props => props.fontSize ? props.fontSize : Platform.OS =='ios' ? 16 : 14}px;
`

export const DateButton = styled(TouchableOpacity)`
    background-color: transparent;
    padding: 8px;
    margin-top: 1%;
    padding-left: 5%;
    justify-content: center;
`