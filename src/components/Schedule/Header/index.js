import React, { useEffect, useState, useRef } from 'react'
import { AttendanceBlock, Text, AttendanceContainer, Container, LeftSection, RightSection, StatsContainer, TotalAttendance, DateButton, ModalContainer, CalendarContainer } from './styles'
import CalendarPicker from 'react-native-calendar-picker'
import moment from 'moment';
import { Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const Header = ({sections, students, selectedClass, setSelectedClass, selectedDate, setSelectedDate}) => {   
    const [dateModalVisible, setDateModalVisible] = useState(false);
    const [classModalVisible, setClassModalVisible] = useState(false);
    const [isToday, setIsToday] = useState(false);
    const [formattedDate, setFormattedDate] = useState();

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
                <DateButton onPress={() => setDateModalVisible(true)}>
                    <Text fontSize={18}>Date : {isToday ? formattedDate + " - Today" : formattedDate}</Text>
                </DateButton>
            </LeftSection>
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
        </Container>
    )
}

export default Header;