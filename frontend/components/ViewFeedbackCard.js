import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SIZES, COLORS } from "../constants/theme";
import pr1 from "../assets/pr1.jpg";

export default function recomendedItemCard( {data} ) {

  const navigation = useNavigation();

  const navigateToAddFeedback = () => {
    navigation.navigate("AddFeedback", { feedbacks: data});
  }

  return (
  <View style={styles.profileContainer}>
    <View style={styles.profileImageContainer}>
      <Image source={pr1} resizeMode="center" style={styles.profileImage} />
    </View>
    <View style={styles.feedbackContainer}>
      <View
        style={{
          flex: 1,
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
          maxWidth: "90%",
          maxHeight:"auto"
        }}
      >
        <Text style={{ color: "black", fontWeight: "500" }}>{data.text}</Text>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    marginLeft: 10
  },
  profileImageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 40,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  feedbackContainer: {
    flex: 1,
  },
});