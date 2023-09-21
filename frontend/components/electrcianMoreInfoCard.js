import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { SIZES, COLORS } from "../constants/theme";


const style = StyleSheet.create({
  personImage: {
    width: "105%",
    height: "100%",
  },
  textBlockCard: {
    fontSize: 14,
    marginBottom: 10,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 10
  },
  textBlockContainer: {
    alignItems: 'center',
  },
});

export default function ElectricianMoreInfoCard( { route }) {

  // const navigation = useNavigation();
  // const { data } = route.params;
  // const image = data.imageUrl;
  // const name = data.name;
  
  return (
  
      <View
        style={{
          width: 350,
          height: 200,
          display: "flex",
          flexDirection: "row",
          borderRadius: SIZES.medium,
          padding: SIZES.small,
          shadowColor: "black",
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          backgroundColor: "#fff",
          margin: 5,
          elevation: 3,
        }}
      >
      </View>
  );
}