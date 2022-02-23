import React, { useState } from 'react'
import { AttendanceBlock, Text, AttendanceContainer, Container, LeftSection, RightSection, StatsContainer, TotalAttendance, DateButton, ModalContainer } from './styles'
import CalendarPicker from 'react-native-calendar-picker'
import moment from 'moment';
import { Modal, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const Header = ({data}) => {   
    const [selectedDate, setSelectedDate] = useState("12-04-2021");
    const [dateModalVisible, setDateModalVisible] = useState(false);
    const [pickerModalVisible, setPickerModalVisible] = useState(false);
    const [classes, setClasses] = useState([
        {
            label: 'Class X',
            value: 'class x'
        },
        {
            label: 'Class P',
            value: 'class p'
        },
        {
            label: 'Class Y',
            value: 'class y'
        },
        {
            label: 'Class Z',
            value: 'class z'
        },
    ])
    const [selectedClass, setSelectedClass] = useState(classes[0].value);

    return (
        <Container>
            <LeftSection>
                <DateButton onPress={() => setPickerModalVisible(true)}>
                    <Text fontSize={18}>Class : {selectedClass}</Text>
                </DateButton>
                <DateButton onPress={() => setDateModalVisible(true)}>
                    <Text fontSize={18}>Date : {selectedDate}</Text>
                </DateButton>
            </LeftSection>
            <RightSection>
                <StatsContainer>
                    <TotalAttendance>35</TotalAttendance>
                    <AttendanceContainer>
                        <AttendanceBlock>
                            <Text>P</Text>
                            <Text>32</Text>
                        </AttendanceBlock>
                        <AttendanceBlock>
                            <Text>A</Text>
                            <Text>2</Text>
                        </AttendanceBlock>
                        <AttendanceBlock>
                            <Text>L</Text>
                            <Text>1</Text>
                        </AttendanceBlock>
                    </AttendanceContainer>
                </StatsContainer>
            </RightSection>
            <Modal visible={dateModalVisible}>
                <ModalContainer>
                <CalendarPicker onDateChange={(date) => setSelectedDate(prev => {
                    setDateModalVisible(false);
                    const check = moment(date, 'YYYY-MM-DD');
                    const month = check.format('M');
                    const day   = check.format('D');
                    const year  = check.format('YYYY');
                    return `${day}-${month}-${year}`
                })}/>
                </ModalContainer>
            </Modal>
            <Modal visible={pickerModalVisible}>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <Picker selectedValue={selectedClass} onValueChange={(itemValue, itemIndex) => setSelectedClass(prev => {
                        setPickerModalVisible(false);
                        return itemValue;
                    })}>
                        {classes.map(_class => (
                            <Picker.Item label={_class.label} value={_class.value} />
                        ))}
                    </Picker>
                </View>
            </Modal>
        </Container>
    )
}

export default Header;