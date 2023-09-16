import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SIZES, COLORS } from "../constants/theme";
import LEDBulb from "../assets/LEDBulb.jpg";

export default function ItemCard() {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View
        style={{
          width: 150,
          height: 180,
          display: "flex",
          flexDirection: "column",
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
        <View
          style={{
            width: "100%",
            height: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Image source={LEDBulb} resizeMode="center" style={style.logoImage} />
        </View>
        <Text style={{ color: "black", fontWeight: 500 }}>Item card</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  logoImage: {
    width: "80%",
    height: "80%",
  },
});
