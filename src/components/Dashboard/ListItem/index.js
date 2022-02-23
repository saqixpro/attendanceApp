import React from 'react'
import { colors } from '../../../constants'
import { AttendanceButton, Container, InformButton, InformContainer, NameContainer, SerialContainer, Text, WarningButton } from './styles'

const ListItem = ({item, updateStatus}) => {
    return (
        <Container>
            <SerialContainer>
                {item.warning && <WarningButton>
                    <Text center color={colors.white}>!</Text>
                    </WarningButton>}
                <Text>{item.id}</Text>
            </SerialContainer>
            <NameContainer>
                <Text>{item.name}</Text>
            </NameContainer>
            <AttendanceButton onPress={() => updateStatus(0)}>
                <Text center bold={item.status == 0}>P</Text>
            </AttendanceButton>
            <AttendanceButton onPress={() => updateStatus(1)} red={item.status == 1}>
                <Text center white={item.status == 1}>A</Text>
            </AttendanceButton>
            <AttendanceButton onPress={() => updateStatus(2)}>
                <Text center bold={item.status == 2}>L</Text>
            </AttendanceButton>
            <InformContainer>
                {item.parentInformed ? <Text center fontSize={10}>{item.parentInformed}</Text> : <InformButton>
                    <Text center underline color={colors.primary}>inform</Text>
                </InformButton>}
            </InformContainer>
        </Container>
    )
}

export default ListItem