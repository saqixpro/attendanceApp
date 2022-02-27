import React, { useEffect, useRef, useState } from 'react'
import { FlatList, SafeAreaView, Text, View} from 'react-native'
import DropdownAlert from 'react-native-dropdownalert';
import api from '../../api';
import { AppLoading, Dashboard } from '../../components';
import { height } from '../../constants';
import { Container, Separator } from './styles';
const DashboardScreen = () => {
    const dropdownRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([])
    const [sections, setSections] = useState([]);
    const [selectedSection, setSelectedSection] = useState();
    const [selectedDate, setSelectedDate] = useState();
    const [refreshing, setRefreshing] = useState(false);


    const updateStatus = (id, status) => {
        const updatedStudent = students?.lstStudents.find(item => item.studentId == id);
        updatedStudent.attendance = status;
        MarkAttendance(id, status);
        setStudents(prev => {
            return {...prev, lstStudents: prev.lstStudents.map(student => student.studentId == id ? updatedStudent : student)}
        })
    }

    const showWarning = (warning) => {
        dropdownRef.current.alertWithType('error', '', warning);
    }

    const inform = async (studentId, attendance) => {
       try {
           setRefreshing(true);
           const result = await api.inform(selectedDate, studentId, attendance);
           dropdownRef.current.alertWithType(result.SvcStatus == 'Success' ? 'success' : 'error', '', result.SvcMsg);
       } catch(error){
           console.log(error);
       } finally {
           setRefreshing(false);
       }
    }

    const MarkAttendance = async (studentId, attendance) => {
        const result =  await api.markStudent(studentId, selectedDate, attendance);
        dropdownRef.current.alertWithType('success', '', result.SvcMsg);
    }

    const saveAttendance = async () => {
        const result = await api.saveAttendance(selectedDate, selectedSection.sectionId);
        dropdownRef.current.alertWithType(result.SvcStatus == "Success" ? 'success' : 'error', '', result.SvcMsg);
    }

    const selectAllItems = async () => {

        for(let i = 0; i < students.lstStudents.length; i++){
            const student = students.lstStudents[i];
            const result = await api.markStudent(student.studentId, selectedDate, "P");
        }

        setStudents(prev => {
            dropdownRef.current.alertWithType("success", "", "All students have been marked present")
            return {...prev, lstStudents: prev.lstStudents.map(student => ({...student, attendance: "P"}))}
        })
    }

    const fetchSectionsAsync = async () => {
       try {
        const data = await api.getSections();
        if(data.SvcStatus !== 'Failure')  setSections(data.lstClsSection);
       } catch(error){
           console.log(error);
       } finally {
           setLoading(false);
       }
    }

    const fetchStudentsAsync = async () => {
        if(!selectedSection) return;

       try {
        const data = await api.getStudents(selectedSection.sectionId, selectedDate);
        setStudents(data.student);
        console.log(data.student);
       } catch(error){
           console.log(error);
       } finally {
           setLoading(false);
       }
    }

    useEffect(() => {
        fetchSectionsAsync();
    }, [])

    useEffect(() => {
        fetchStudentsAsync();
    }, [selectedDate, selectedSection, loading])

    return loading ? <AppLoading /> : (
           <Container>
               <SafeAreaView />
              <Dashboard.Header students={students} selectedClass={selectedSection} setSelectedClass={setSelectedSection} selectedDate={selectedDate} setSelectedDate={setSelectedDate} sections={sections} />
              <FlatList data={students?.lstStudents} ListEmptyComponent={() => <View style={{flex: 1, minHeight: height / 2, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 18}}>No Data Available</Text>
              </View>} ItemSeparatorComponent={() => <Separator />} ListHeaderComponent={() => <Dashboard.ListHeader saveAttendance={saveAttendance} selectAllItems={selectAllItems} />} renderItem={({item, index}) => (
                  <Dashboard.ListItem showWarning={showWarning} inform={inform} item={item} updateStatus={(status) => updateStatus(item.studentId, status)} />
              )}>

              </FlatList>
              <DropdownAlert ref={dropdownRef} />
           </Container>
    )
}

export default DashboardScreen;