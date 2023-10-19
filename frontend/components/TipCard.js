import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SIZES, COLORS } from "../constants/theme";

const style = StyleSheet.create({
  imageContainer: {
    width: 80,
    height: 80,
    position: "relative",
    backgroundColor: "yellow"

  },
  tipImage: {
    width:"150%",
    height: "150%",
    borderColor: "#132930",
  },
  textCard: {
    fontSize: 18,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 26,
    paddingLeft: 50,
    fontSize: 18,
    borderRadius: 40,
  },
});

export default function TipCard({ data }) {
  return (
    <View
      style={{
        width: 310,
        height: 90,
        display: "flex",
        flexDirection: "row",
        borderRadius: 40,
        padding: 5,
        borderColor: "#132930",
        backgroundColor: "#fff",
        margin: 5,
        elevation: 3,
        borderWidth: 1,
      }}
    >
      <View style={style.imageContainer}>
        <Image
          source={data.imageUrl}
          resizeMode="center"
          style={style.tipImage}
        />
      </View>
      <View style={styles.container}>
        <Text style={style.textCard}>{data.tip}</Text>
      </View>
    </View>
  );
}
