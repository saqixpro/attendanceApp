import React, { useEffect, useState } from 'react'
import { AttendanceBlock, Text, AttendanceContainer, Container, LeftSection, RightSection, StatsContainer, TotalAttendance, DateButton, ModalContainer, CalendarContainer } from './styles'
import CalendarPicker from 'react-native-calendar-picker'
import moment from 'moment';
import { Modal, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const Header = ({sections, students, selectedClass, setSelectedClass, selectedDate, setSelectedDate}) => {   
    const [dateModalVisible, setDateModalVisible] = useState(false);
    const [classModalVisible, setClassModalVisible] = useState(false);

    useEffect(() => {
        if(!selectedDate){
            const check = moment(new Date(), 'YYYY-MM-DD');
            const month = check.format('M');
            const day   = check.format('D');
            const year  = check.format('YYYY');
            date = `${day}-${month}-${year}` 
            setSelectedDate(date);
        }
    }, [])


    return (
        <Container>
            <LeftSection>
                <DateButton onPress={() => setClassModalVisible(true)}>
                    <Text fontSize={18}>Class : {selectedClass?.section || "Select a Class"}</Text>
                </DateButton>
                <DateButton onPress={() => setDateModalVisible(true)}>
                    <Text fontSize={18}>Date : {selectedDate}</Text>
                </DateButton>
            </LeftSection>
            <RightSection>
                <StatsContainer>
                    <TotalAttendance>{students?.total || 0}</TotalAttendance>
                    <AttendanceContainer>
                        <AttendanceBlock>
                            <Text>P</Text>
                            <Text>{students?.present || 0}</Text>
                        </AttendanceBlock>
                        <AttendanceBlock>
                            <Text>A</Text>
                            <Text>{students?.absent || 0}</Text>
                        </AttendanceBlock>
                        <AttendanceBlock>
                            <Text>L</Text>
                            <Text>{students?.leave || 0}</Text>
                        </AttendanceBlock>
                    </AttendanceContainer>
                </StatsContainer>
            </RightSection>
            <Modal transparent visible={dateModalVisible}>
                <ModalContainer>
                    <CalendarContainer>
                        <CalendarPicker onDateChange={(date) => setSelectedDate(prev => {
                        setDateModalVisible(false);
                        const check = moment(date, 'YYYY-MM-DD');
                        const month = check.format('M');
                        const day   = check.format('D');
                        const year  = check.format('YYYY');
                        return `${day}-${month}-${year}`
                    })}/>
                    </CalendarContainer>
                </ModalContainer>
            </Modal>
            <Modal transparent visible={classModalVisible}>
                <ModalContainer>
                    <CalendarContainer>
                        <Picker selectedValue={selectedClass} onValueChange={(item, index) => setSelectedClass(prev => {
                            setClassModalVisible(false);
                            return item;
                        })}>
                            {sections.map((section, index) => (
                                <Picker.Item key={section.sectionId} label={section.section} value={section} />
                            ))}
                        </Picker>
                    </CalendarContainer>
                </ModalContainer>
            </Modal>
        </Container>
    )
}

export default Header;