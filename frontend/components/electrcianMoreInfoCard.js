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
    fontSize: 11,
    marginBottom: 10,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    fontSize: 16,
    marginBottom: 10
  },
  textBlockContainer: {
    alignItems: 'center',
  },
});

export default function ElectricianMoreInfoCard( { data }) {

  const navigation = useNavigation();
  
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
        <View
        >
          <Image 
            source={data.imageUrl} 
            resizeMode="center" 
            style={style.personImage} 
          />
        </View>
        <View style={styles.container}>
            <Button 
                title="Book Now"
                onPress={() => {
                  navigation.navigate("ElectricianMoreInfo", { data });
                }}
            />
            <Button 
                title="Rate Electrician"
                onPress={() => {
                  navigation.navigate("ElectricianMoreInfo", { data });
                }}
            />
        </View>
      </View>
  );
}