import React from "react";
import { useNavigation } from "@react-navigation/native";
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

  const navigation = useNavigation();
  const navigateToBookking = () => {
    navigation.navigate("ConfirmBooking", { electricianData});
  }

return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, padding: SIZES.large }}>
        {/* Display the selected electrician's data here */}
        <View>
          <Text style={styles.textBlockCard0} >{electricianData.name}</Text>
        </View>
        <View style={styles.imageAndContainer0}>
          <Image
            source={electricianData.imageUrl}
            resizeMode="cover"
            style={styles.personImage}
          />
          <View style={styles.container0}>
            <Text style={styles.textBlockCard1} ></Text>
          </View>
        </View>
        <View style={styles.container1}>
          <Text style={styles.textBlockCar2} >Name: {electricianData.name}</Text>
          <Text style={styles.textBlockCar2} >Age: {electricianData.age}</Text>
          <Text style={styles.textBlockCar2} >Location: {electricianData.location}</Text>
          <Text style={styles.textBlockCar2} >Mobile No: {electricianData.mobileNo}</Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.textBlockCar3} >Availability</Text>
          <Text style={styles.textBlockCar3} ></Text>
          <Text style={styles.textBlockCar3} >Qualification/ Experience</Text>
          <Text style={styles.textBlockCar3} ></Text>
        </View>
        <TouchableOpacity
        onPress={navigateToBookking}>
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
                  Book Now
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
                  View Feedbacks
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageAndContainer0: {
    flexDirection: "row", // Arrange the image and container0 horizontally
    alignItems: "flex-end"
  },
  personImage: {
    width: 180, // Set a fixed width
    height: 180, // Set a fixed height
    resizeMode: "cover",
    borderRadius: SIZES.medium,
    borderWidth: 0.4, // Add border width
    borderColor: "#096FCC",
  },
  container0: {
    flex: 1,
    width: "50%",
    height: 100,
    flexDirection: "column",
    borderRadius: SIZES.medium,
    alignItems: "center",
    padding: 4,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: COLORS.white,
    marginLeft: 10,
    elevation: 3,
    borderWidth: 0.4,
    borderColor: "#096FCC",
  },
  container1: {
    width: "100%",
    height: 100,
    flexDirection: "column",
    borderRadius: SIZES.medium,
    alignItems: "center",
    padding: 4,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: COLORS.white,
    marginTop: 10,
    elevation: 3,
    borderWidth: 0.4,
    borderColor: "#096FCC",
  },
  container2: {
    width: "100%",
    height: 210,
    flexDirection: "column",
    borderRadius: SIZES.medium,
    alignItems: "center",
    padding: 3,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: COLORS.white,
    marginTop: 10,
    elevation: 3,
    borderWidth: 0.4,
    borderColor: "#096FCC",
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
  },
  textBlockCard0: {
    fontSize: SIZES.large,
    marginLeft: 5
  },
  textBlockCard1: {
    fontSize: SIZES.medium,
  },
  textBlockCar2: {
    fontSize: SIZES.medium,
  },
  textBlockCar3: {
    fontSize: SIZES.medium,
    marginBottom: SIZES.small,
  },
});