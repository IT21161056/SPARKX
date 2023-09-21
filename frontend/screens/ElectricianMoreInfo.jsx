import React, { useState } from "react";
import { SIZES, COLORS } from "../constants/theme";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const style = StyleSheet.create({
  headerText: {
    fontSize: SIZES.xLarge
  }
})

export default function ElectricianMoreInfo ({route})  {

  const data = route.params;
  const name = data.name;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={{ flex: 1, padding: SIZES.large }}>
          <View>
            <Text style={style.headerText}>{name}</Text>
          </View>
        </View>
    </SafeAreaView>
  )
}


