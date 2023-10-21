import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating";

const TipsMoreInfo = ({ route }) => {
  const tipsData = route.params.tipsData;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <Image source={tipsData.imageUrl} style={styles.imageContainer} />

        {/* Table Row 1: Name */}
        <View style={styles.tableRow}>
          <Text style={styles.textBlockCard2}>Name:</Text>
          <Text style={styles.textBlockCard1}>{tipsData.name}</Text>
        </View>

        {/* Table Row 2: Energy Saving Tips */}
        <View style={styles.tableRow}>
          <Text style={styles.textBlockCard0}>Energy Saving Tips:</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.textBlockCard1}> {tipsData.tip}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.textBlockCard0}>Rating:</Text>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={tipsData.rating} 
            fullStarColor={"#FFD700"} 
            starSize={28} 
            alignItems="left"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 20,
    justifyContent: "center", 
  },
  infoContainer: {
    alignItems: "center",
    padding: 20,
    borderWidth: 2,
    marginLeft: 30,
    width: 300,
    borderRadius: 40,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50, 
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  textBlockCard0: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1, // To make the label take 1/3 of the row width

  },
  textBlockCard1: {
    fontSize: 18,
    flex: 2, // To make the content take 2/3 of the row width
  },
  textBlockCard2: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1, 
  },
  
});

export default TipsMoreInfo;
