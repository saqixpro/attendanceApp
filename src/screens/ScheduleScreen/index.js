import React, { useEffect, useRef, useState } from 'react'
import { FlatList, SafeAreaView, View, Modal} from 'react-native'
import DropdownAlert from 'react-native-dropdownalert';
import api from '../../api';
import { AppLoading, Schedule} from '../../components';
import { height } from '../../constants';
import { Container, Separator,CalendarContainer, BtnText as Text, ModalContainer, ListButton } from './styles';
const dummyData = [
    {
        id: 1,
        time: "12:45AM",
        section: "IX-A",
        subject: 'science',
        status: 10,
        sub: "Harry"
    },
    {
        id: 2,
        time: "12:45AM",
        section: "IX-A",
        subject: 'science',
        status: 20,
        sub: "Lyla"
    },
    {
        id: 3,
        time: "12:45AM",
        section: "IX-A",
        subject: 'science',
        status: 30,
        sub: "Hashim"
    },
    {
        id: 3,
        time: "12:45AM",
        lunch: true
    },
    {
        id: 4,
        time: "12:45AM",
        section: "IX-A",
        subject: 'science',
        status: 40,
        sub: "Harry"
    },
]

const DashboardScreen = () => {
    const dropdownRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    const [selectorVisible, setSelectorVisible] = useState(false);
    const [currentValue, setCurrentValue] = useState(null);
    const [data, setData] = useState(dummyData);

    const onSelectOption = (option) => {
        setSelectorVisible(prev => {
            // handle option here
              const _data = data.map(_item => _item.id == currentValue ? ({..._item, status: option}) : _item);
              setData(_data);
            return false;
        })
    }

    const fetchDailySchedule = async () => {
        const result = await api.fetchSchedule(selectedDate);
        console.log(result);
    }

    useEffect(() => {
        fetchDailySchedule();
    }, [selectedDate])

    return loading ? <AppLoading /> : (
           <Container>
               <SafeAreaView />
              <Schedule.Header selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
              <FlatList style={{marginTop: 20}} data={data} ListEmptyComponent={() => <View style={{flex: 1, minHeight: height / 2, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 18}}>No Data Available</Text>
              </View>} ItemSeparatorComponent={() => <Separator />} renderItem={({item, index}) => (
                  <Schedule.ListItem onPress={() => setSelectorVisible(() => {
                      setCurrentValue(item.id);
                      return true;
                  })} item={item} />
              )}>
              </FlatList>
              <Modal transparent visible={selectorVisible}>
                <ModalContainer>
                    <CalendarContainer>
                       <ListButton onPress={() => onSelectOption(10)}>
                           <Text>Completed</Text>
                       </ListButton>
                       <ListButton onPress={() => onSelectOption(20)}>
                           <Text>Partial</Text>
                       </ListButton>
                       <ListButton onPress={() => onSelectOption(30)}>
                           <Text>Not Done</Text>
                       </ListButton>
                       <ListButton onPress={() => onSelectOption(40)}>
                           <Text>NA</Text>
                       </ListButton>
                    </CalendarContainer>
                </ModalContainer>
            </Modal>
              <DropdownAlert ref={dropdownRef} />
           </Container>
    )
}

export default DashboardScreen;