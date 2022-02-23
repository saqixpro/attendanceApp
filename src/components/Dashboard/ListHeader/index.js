import React from 'react'
import { Attendance, Text, Inform, Button, Container, Name, Serial } from './styles'

const ListHeader = () => {
    return (
        <Container>
            <Serial>
                <Text>#</Text>
            </Serial>
            <Name>
                <Text>Name</Text>
            </Name>
            <Attendance>
                <Button>
                    <Text>P</Text>
                </Button>
            </Attendance>
            <Attendance>
                <Text>-</Text>
            </Attendance>
            <Attendance>
                <Text>-</Text>
            </Attendance>
            <Inform></Inform>
        </Container>
    )
}

export default ListHeader;