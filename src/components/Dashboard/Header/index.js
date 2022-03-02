import React, { useEffect, useState, useRef } from 'react'
import { AttendanceBlock, Text, AttendanceContainer, Container, LeftSection, RightSection, StatsContainer, TotalAttendance, DateButton, ModalContainer, CalendarContainer } from './styles'
import CalendarPicker from 'react-native-calendar-picker'
import moment from 'moment';
import { Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useSelector } from 'react-redux';
import { getAttendance } from '../../../constants/selectors';
const Header = ({sections, selectedClass, setSelectedClass, selectedDate, setSelectedDate}) => {   
    const [dateModalVisible, setDateModalVisible] = useState(false);
    const [classModalVisible, setClassModalVisible] = useState(false);
    const [isToday, setIsToday] = useState(false);
    const [formattedDate, setFormattedDate] = useState();
    const attendance = useSelector(getAttendance);

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

    useEffect(() => {
            if(selectedDate){
                const check = moment(new Date(), 'YYYY-MMMM-DD');
                const month = check.format('M');
                const displayMonth = check.format('MMM');
                const day   = check.format('D');
                const year  = check.format('YYYY');
                const today = `${day}-${month}-${year}`;
                setIsToday(today == selectedDate);

                const formattedArr = selectedDate.split('-');
                const formatted = `${formattedArr[0]}-${displayMonth}`;
                setFormattedDate(formatted);
            }

    } ,[selectedDate])

    return (
        <Container>
            <LeftSection>
                <DateButton onPress={() => setClassModalVisible(true)}>
                    <Text fontSize={14}>Class : {selectedClass?.section || "Select a Class"}</Text>
                </DateButton>
                <DateButton onPress={() => setDateModalVisible(true)}>
                    <Text fontSize={14}>Date : {isToday ? formattedDate + " - Today" : formattedDate}</Text>
                </DateButton>
            </LeftSection>
            <RightSection>
                <StatsContainer>
                    <TotalAttendance>{attendance?.total || 0}</TotalAttendance>
                    <AttendanceContainer>
                        <AttendanceBlock>
                            <Text>P</Text>
                            <Text>{attendance?.present || 0}</Text>
                        </AttendanceBlock>
                        <AttendanceBlock>
                            <Text>A</Text>
                            <Text>{attendance?.absent || 0}</Text>
                        </AttendanceBlock>
                        <AttendanceBlock>
                            <Text>L</Text>
                            <Text>{attendance?.leave || 0}</Text>
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