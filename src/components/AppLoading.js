import React from "react";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../constants";

const AppLoading = () => (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={colors.accent} size="small" />
    </View>
)

export default AppLoading;