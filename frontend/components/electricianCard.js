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
import e1 from '../assets/e1.png';

const style = StyleSheet.create({
  personImage: {
    width: "105%",
    height: "100%",
  },
  textBlockCard: {
    fontSize: 16,
    marginBottom: 10,
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  textBlockContainer: {
    alignItems: 'center',
  },
});


export default function ItemCard() {
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
            source={e1} 
            resizeMode="center" 
            style={style.personImage} 
          />
        </View>
        <View style={styles.container}>
            <Text style={style.textBlockCard}>Name :</Text>
            <Text style={style.textBlockCard}>Age :</Text>
            <Text style={style.textBlockCard}>Location :</Text>
            <Text style={style.textBlockCard}>Rating :</Text>
            <Button 
                title="More Info"
                style={{
                  width: 200,
                  borderRadius: 10, 
                }}
            />
        </View>
      </View>
    </TouchableOpacity>
  );
}