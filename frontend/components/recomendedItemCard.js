import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SIZES, COLORS } from "../constants/theme";
import LEDBulb from "../assets/LEDBulb.jpg";

export default function recomendedItemCard() {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View
        style={{
          flex: 1,
          width: 220,
          height: 120,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
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
            width: 90,
            height: 90,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Image source={LEDBulb} resizeMode="center" style={style.logoImage} />
        </View>
        <View style={{ flex: 1, height: "100%" }}>
          <Text style={{ color: "black", fontWeight: 500 }}>Item card</Text>
          <Text style={{ color: "black", fontWeight: 500 }}>Item card</Text>
          <Text style={{ color: "black", fontWeight: 500 }}>Item card</Text>
          <Text style={{ color: "black", fontWeight: 500 }}>Item card</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  logoImage: {
    width: "100%",
    height: "100%",
  },
});
