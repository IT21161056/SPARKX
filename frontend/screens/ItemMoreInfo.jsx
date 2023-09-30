import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import bulbImage from "../assets/LEDBulb.jpg";
import heart_filled from "../assets/heart_filled.png";
import heart_outlined from "../assets/heart_outlined.png";

const ItemMoreInfo = ({ route }) => {
  const [favoriteItem, setFavoriteItem] = useState(false);
  const navigation = useNavigation();
  const { params } = useRoute();
  const itemData = route.params.itemData;
  let item = params;

  const { marker } = route.params;
  return (
    <SafeAreaView
      style={{
        display: "flex",
        height: "100%",
        backgroundColor: "transparent",
        flexDirection: "column",
        position: "relative",
        zIndex: -2,
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 0,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          height: "60%",
          width: "100%",
          backgroundColor: "#16324F",
          zIndex: -1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 340,
            height: 340,
            backgroundColor: "#fff",
            borderRadius: 30,
            position: "absolute",
            top: -280,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={itemData.image}
            resizeMode="center"
            style={style.logoImage}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: "auto",
            marginTop: 60,
            padding: 25,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={style.itemName}>{itemData.itemName}</Text>
            <TouchableOpacity
              onPress={() => {
                setFavoriteItem((p) => !p);
              }}
            >
              <Image
                style={{ width: 24, height: 24 }}
                source={favoriteItem ? heart_filled : heart_outlined}
              />
            </TouchableOpacity>
          </View>

          <Text style={style.itemDescriptionTitle}>Wattage</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            {itemData.wattage.map((item, index) => (
              <Text style={style.itemDetails} key={index}>
                {item}W /
              </Text>
            ))}
          </View>
          <Text style={style.itemDescriptionTitle}>Holder type</Text>
          <Text style={style.itemDetails}>{itemData.holderType}</Text>
          <Text style={style.itemDescriptionTitle}>Price</Text>
          <Text style={style.itemDetails}>Rs {itemData.price}</Text>
        </View>
        <TouchableOpacity style={style.addToCartBtn}>
          <Text style={{ color: "#fff", fontSize: 25 }}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ItemMoreInfo;

const style = StyleSheet.create({
  logoImage: {
    width: "80%",
    height: "80%",
  },
  itemName: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "600",
  },
  itemDescriptionTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    marginTop: 10,
  },
  itemDetails: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "400",
    marginTop: 5,
  },
  addToCartBtn: {
    backgroundColor: "#2A628F",
    display: "flex",
    alignItems: "center",
    padding: 10,
    margin: 20,
    marginTop: 0,
    width: "86%",
    borderRadius: 10,
  },
});
