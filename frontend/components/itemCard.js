import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LEDBulb from "../assets/LEDBulb.jpg";
import { SIZES } from "../constants/theme";

export default function ItemCard({ data }) {
  const navigation = useNavigation();

  const navigateToMoreInfo = () => {
    navigation.navigate("ItemMoreInfoScreen", { itemData: data });
  };
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={navigateToMoreInfo}>
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
          <Image
            source={data.image}
            resizeMode="center"
            style={style.logoImage}
          />
        </View>
        <Text style={{ color: "black", fontWeight: 500 }}>{data.itemName}</Text>
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
