import React, { useEffect, useRef, useState } from 'react'
import { FlatList, SafeAreaView, View, Modal} from 'react-native'
import DropdownAlert from 'react-native-dropdownalert';
import { useSelector } from 'react-redux';
import api from '../../api';
import { AppLoading, Schedule} from '../../components';
import { height } from '../../constants';
import { getCurrentUser } from '../../constants/selectors';
import { Container, Separator,CalendarContainer, BtnText as Text, ModalContainer, ListButton } from './styles';

const DashboardScreen = () => {
    const dropdownRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    const [selectorVisible, setSelectorVisible] = useState(false);
    const [currentValue, setCurrentValue] = useState(null);
    const [data, setData] = useState([]);
    const currentUser = useSelector(getCurrentUser);

    const onSelectOption = async (option) => {

        const result = await api.updateSchedule(currentValue.sectionId, selectedDate, currentValue.periodId, option, currentUser.tokenId);
        if(result.SvcStatus == 'Success') {
            setSelectorVisible(prev => {
                const _data = data.map(_item => _item.periodId == currentValue.periodId && _item.sectionId == currentValue.sectionId  ? ({..._item, status: option}) : _item);
                setData(_data);
              return false;
          })
        } else {
            dropdownRef.current.alertWithType('error', '', result.SvcMsg);
        }
        
    }

    const fetchDailySchedule = async () => {
        const result = await api.fetchSchedule(selectedDate, currentUser.tokenId);
        if(result.SvcStatus == 'Success') setData(result.lstSchedule);
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
                      setCurrentValue(item);
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