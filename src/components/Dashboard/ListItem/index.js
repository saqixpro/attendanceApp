import React from 'react'
import { colors } from '../../../constants'
import { AttendanceButton, Container, InformButton, InformContainer, NameContainer, SerialContainer, Text, WarningButton } from './styles'

const ListItem = ({item, inform, updateStatus, showWarning}) => {
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
                {item.informDt !== "-" && item.informDt ? 
                <>
                <Text center fontSize={10}>{item.informDt}</Text>
                <Text center fontSize={10}>{item.informTm}</Text>  
                </>
                : <InformButton onPress={() => inform(item.studentId, item.attendance)}>
                    <Text center underline color={colors.primary}>inform</Text>
                </InformButton>}
            </InformContainer>
        </Container>
    )
}

export default ListItem