import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { View, 
         SafeAreaView, 
         StyleSheet,
         Image,
         Text,
         TouchableOpacity,
         TextInput,
         Button, 
         ScrollView} from "react-native";
import { SIZES, COLORS } from "../constants/theme";

const ConfirmBooking = ( {route} ) => {

  const navigation = useNavigation();

    const handleConfirmBooking = () => {
      navigation.navigate('ElectricianMoreInfo', {electricianData});
  };

  const electricianData = route.params?.electricianData;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <ScrollView>
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

        <View>
          <TextInput
            style={styles.inputLarger}
            placeholder="Enter your electric issue *"
            // value={electricIssue}
            // onChangeText={text => setElectricIssue(text)}
        />

          <TextInput
            style={styles.input}
            placeholder="Enter your name *"
          //   value={uName}
          //   onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter contact no *"
            // value={contactNumber}
            // onChangeText={text => setContactNumber(text)}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter address *"
            // value={address}
            // onChangeText={text => setAddress(text)}
          />
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 170,
              height: 40, // Adjust the height as needed
              backgroundColor: "#096FCC",
              borderRadius: SIZES.small,
              marginLeft: 90,
            }}
            onPress={handleConfirmBooking}
          >
            <Text
              style={{
                color: "white",
                fontSize: SIZES.medium,
                textAlign: "center",
              }}
            >
              Confirm Booking
            </Text>
          </TouchableOpacity>
       </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ConfirmBooking

const styles = StyleSheet.create({
  imageAndContainer0: {
    flexDirection: "row", // Arrange the image and container0 horizontally
    alignItems: "flex-end",
    marginBottom: 60
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
    backgroundColor: "#fff",
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
  imageContainer: {
    width: 200,
    height: 220, // Adjust the height as needed
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  textBlockCard0: {
    fontSize: SIZES.large,
    marginLeft: 5
  },
  textBlockCard1: {
    fontSize: SIZES.medium,
  },
  input: {
    fontSize: SIZES.medium,
    borderWidth: 0.4,
    borderColor: '#096FCC',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "#DDECFA"
  },
    inputLarger: {
    fontSize: 16,
    borderWidth: 0.4,
    borderColor: '#096FCC',
    borderRadius: 15,
    paddingVertical: 25, // Adjust the height as needed
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#DDECFA"
  },
});