import React from 'react'
import { colors } from '../../../constants';
import { Attendance, Text, Inform, Button, Container, Name, Serial, Btn } from './styles'

const ListHeader = ({selectAllItems, saveAttendance}) => {
    return (
        <Container>
            <Serial>
                <Text>#</Text>
            </Serial>
            <Name>
                <Text>Name</Text>
            </Name>
            <Attendance>
                <Button onPress={selectAllItems}>
                    <Text>P</Text>
                </Button>
            </Attendance>
            <Attendance>
                <Text>-</Text>
            </Attendance>
            <Attendance>
                <Text>-</Text>
            </Attendance>
            <Inform>
                <Btn onPress={saveAttendance}>
                    <Text color={colors.primary}>Save</Text>
                </Btn>
            </Inform>
        </Container>
    )
}

export default ListHeader;