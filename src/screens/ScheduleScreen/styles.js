import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors, width } from "../../constants";

export const Container = styled.View`
    flex: 1;
`

export const Separator = styled.View`
    width: 100%;
    height: 2px;
    background-color: ${colors.grey};
`

export const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.3);
`
export const CalendarContainer = styled.View`
    background-color: ${colors.white};
    padding: 10px;
    border-radius: 10px;
    width: ${width / 1.05}px;
    aspect-ratio: ${1};
    justify-content: space-evenly;
`

export const ListButton = styled(TouchableOpacity)`
    width: 90%;
    align-self: center;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.1);
`

export const BtnText = styled.Text`
    font-size: ${props => props.fontSize ? props.fontSize : 14}px;
    font-weight: 600;
`
