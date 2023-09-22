import React from "react";
import { View, 
         SafeAreaView, 
         FlatList,
         StyleSheet,
         Image,
         Text,
         TouchableOpacity } from "react-native";
import { SIZES, COLORS } from "../constants/theme";

export default function ElectricianMoreInfo( { route }) {

  // Retrieve the electrician data passed from ElectricianCard
  const electricianData = route.params.electricianData;

return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, padding: SIZES.large }}>
        {/* Display the selected electrician's data here */}
        <Image
          source={electricianData.imageUrl}
          resizeMode="cover"
          style={styles.personImage}
        />
        <View style={styles.container1}>
          <Text style={styles.textBlockCard} >Name: {electricianData.name}</Text>
          <Text style={styles.textBlockCard} >Age: {electricianData.age}</Text>
          <Text style={styles.textBlockCard} >Location: {electricianData.location}</Text>
          <Text style={styles.textBlockCard} >Mobile No: {electricianData.mobileNo}</Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.textBlockCard} ></Text>
          <Text style={styles.textBlockCard} ></Text>
          <Text style={styles.textBlockCard} ></Text>
          <Text style={styles.textBlockCard} ></Text>
        </View>
        <TouchableOpacity>
            <Text 
              style={{
                borderRadius: SIZES.small,
                color: "white",
                fontSize: 16,
                width: 170,
                textAlign: "center",
                padding: 5,
                marginTop: 10,
                marginLeft: 90,
                backgroundColor: "#096FCC"
              }}>
                  Confirm Booking
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text 
              style={{
                borderRadius: SIZES.small,
                color: "white",
                fontSize: 16,
                width: 170,
                textAlign: "center",
                padding: 5,
                marginTop: 10,
                marginLeft: 90,
                backgroundColor: "#096FCC"
              }}>
                  Show Feedbacks
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  personImage: {
    width: 180, // Set a fixed width
    height: 180, // Set a fixed height
    resizeMode: "cover",
    borderRadius: SIZES.medium,
    borderWidth: 0.5, // Add border width
    borderColor: "#096FCC",
  },
  container1: {
    width: "100%",
    height: 130,
    flexDirection: "column",
    borderRadius: SIZES.medium,
    alignItems: "center",
    padding: 3,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: COLORS.white,
    margin: 10,
    elevation: 3,
  },
  container2: {
    width: "100%",
    height: 170,
    flexDirection: "column",
    borderRadius: SIZES.medium,
    alignItems: "center",
    padding: 3,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: COLORS.white,
    margin: 10,
    elevation: 3,
  },
  imageContainer: {
    width: 200,
    height: 220, // Adjust the height as needed
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  infoContainer: {
    flex: 1,
    padding: SIZES.medium,
  },
  textBlockCard: {
    fontSize: 15,
    marginBottom: SIZES.small,
    // borderColor: COLORS.primary,
    // borderWidth: 2
  },
});