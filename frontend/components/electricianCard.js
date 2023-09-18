import React from "react";
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

export default function ElectricianCard( { data }) {
  return (
    <TouchableOpacity activeOpacity={0.5}>
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
          style={{
            width: "50%",
            height: "80%",
            marginTop: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderWidth: 0.5,
            borderRadius: 15,
            borderColor: "#000", 
          }}
        >
          <Image 
            source={data.imageUrl} 
            resizeMode="center" 
            style={style.personImage} 
          />
        </View>
        <View style={styles.container}>
            <Text style={style.textBlockCard} >Name: {data.name}</Text>
            <Text style={style.textBlockCard} >Age: {data.age}</Text>
            <Text style={style.textBlockCard} >Location: {data.location}</Text>
            <Text style={style.textBlockCard} >Rating: {data.rating}</Text>
            <Button 
                title="More Info"
            />
        </View>
      </View>
    </TouchableOpacity>
  );
}