import React from 'react'
import { colors } from '../../../constants'
import {Button, ClassContainer, Container, LunchContainer, Stat, StatsContainer, Sub, Text, TimeContainer } from './styles'
import Entypo from 'react-native-vector-icons/Entypo'

const Icons = {
    PIE : "pie-chart",
    circle: "circle",
    cross: 'circle-with-cross'
}

const ListItem = ({item, updateStatus, onPress}) => {
    return (
        <Container>
            <TimeContainer>
               <Text>{item.time}</Text>
            </TimeContainer>
            {!item.lunch ? (
                <>
                    <ClassContainer>
                     <Text fontSize={14} margined center>{item.section}</Text>
                     <Text fontSize={12} margined center>{item.subject}</Text>
                    </ClassContainer>
                    <StatsContainer>
                      <Sub>
                        {item.sub !== "Harry" && (
                        <Text fontSize={12} center>Subs for {item.sub}</Text>
                         )}
                     </Sub>
                     <Stat>
                      <Entypo name={item.status == 10 ? Icons.circle : item.status == 20 ? Icons.PIE : item.status == 30 ? Icons.cross : Icons.circle } size={24} color={item.status == 10 ? "green" : item.status == 20 ? 'orange' : item.status == 30 ? "red" : 'grey'} />
                         <Button onPress={onPress}>
                             <Entypo name="dots-three-vertical" size={16} />
                         </Button>
                    </Stat>
                   </StatsContainer>
                </>
            ) : <LunchContainer>
                <Text fontSize={15}>Lunch</Text>
            </LunchContainer> }
        </Container>
    )
}

export default ListItem