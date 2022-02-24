import { Image, TouchableOpacity } from "react-native";
import { Surface } from "react-native-paper";
import styled from "styled-components/native";
import { colors, width } from "../../constants";

export const Container = styled(Surface)`
    flex:1;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
`

export const LogoContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`

export const Logo = styled(Image)`
    width: ${width / 1.5}px;
    height: ${width / 1.5}px;
`

export const Body = styled.View`
    flex: 2;
`

export const Text = styled.Text`
    font-size: 16px;
    color: ${props => props.color ? props.color : colors.black};
`

export const Button = styled(TouchableOpacity)`
    background-color: transparent;
    align-self: ${props => props.center ? 'center' : "flex-end"};
`

export const MainButton = styled(TouchableOpacity)`
    background-color: ${colors.primary};
    padding: 15px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 8%;
    margin-bottom: 8%;
`