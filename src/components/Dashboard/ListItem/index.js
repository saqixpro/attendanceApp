import React from 'react'
import { colors } from '../../../constants'
import { AttendanceButton, Container, InformButton, InformContainer, NameContainer, SerialContainer, Text, WarningButton } from './styles'

const ListItem = ({item, updateStatus, showWarning}) => {
    return (
        <Container>
            <SerialContainer>
                {item.warningTxt !== "-" && item.warningTxt && <WarningButton onPress={() => showWarning(item.warningTxt)}>
                    <Text center color={colors.white}>!</Text>
                    </WarningButton>}
                <Text>{item.rollNo}</Text>
            </SerialContainer>
            <NameContainer>
                <Text>{item.name}</Text>
            </NameContainer>
            <AttendanceButton onPress={() => updateStatus("P")}>
                <Text center bold={item.attendance == "P"} color={item.attendance == "P" ? colors.green : undefined}>P</Text>
            </AttendanceButton>
            <AttendanceButton onPress={() => updateStatus("A")} red={item.attendance == "A"}>
                <Text center white={item.attendance == "A"}>A</Text>
            </AttendanceButton>
            <AttendanceButton onPress={() => updateStatus("L")}>
                <Text center bold={item.attendance == "L"} color={item.attendance == "L" ? colors.accent : undefined}>L</Text>
            </AttendanceButton>
            <InformContainer>
                {item.informDt !== "-" && item.informDt ? <Text center fontSize={10}>{item.informDt + " " + item.informTm}</Text> : <InformButton>
                    <Text center underline color={colors.primary}>inform</Text>
                </InformButton>}
            </InformContainer>
        </Container>
    )
}

export default ListItem