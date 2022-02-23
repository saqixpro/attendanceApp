import React, { useState } from 'react'
import { FlatList, SafeAreaView, Text, View} from 'react-native'
import { Dashboard } from '../../components';
import { Container, Separator } from './styles';

const DashboardScreen = () => {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: 'John',
            status: 0
        },
        {
            id: 2,
            name: 'Smeed',
            status: 1,
            warning: "Something Went Wrong"
        },
        {
            id: 3,
            name: 'Rahul',
            status: 2,
            parentInformed: "25-11-2021 18:02:35"
        },
        {
            id: 4,
            name: 'John',
            status: 0
        },
        {
            id: 8,
            name: 'Smeed',
            status: 1,
            warning: "Something Went Wrong"
        },
        {
            id: 9,
            name: 'Rahul',
            status: 2,
            parentInformed: "25-11-2021 18:02:35"
        },
        {
            id: 11,
            name: 'John',
            status: 0
        },
        {
            id: 12,
            name: 'Smeed',
            status: 1,
            warning: "Something Went Wrong"
        },
        {
            id: 18,
            name: 'John',
            status: 0
        },
        {
            id: 19,
            name: 'Smeed',
            status: 1,
            warning: "Something Went Wrong"
        },
        {
            id: 20,
            name: 'Rahul',
            status: 2,
            parentInformed: "25-11-2021 18:02:35"
        },
    ])

    const updateStatus = (id, status) => {
        const updatedStudent = students.find(item => item.id == id);
        updatedStudent.status = status;
        setStudents(prev => {
            return prev.map(student => student.id == id ? updatedStudent : student);
        })
    }

    return (
           <Container>
               <SafeAreaView />
              <Dashboard.Header />
              <FlatList data={students} ItemSeparatorComponent={() => <Separator />} ListHeaderComponent={Dashboard.ListHeader} renderItem={({item, index}) => (
                  <Dashboard.ListItem item={item} updateStatus={(status) => updateStatus(item.id, status)} />
              )}>

              </FlatList>
           </Container>
    )
}

export default DashboardScreen;