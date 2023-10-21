import React, { Component, useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { SIZES } from "../constants/theme";
import signupImg from "../assets/signup_from_img.png";

export default function RegisterScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      {isLoading && (
        <View style={[style.loadingSpinner, style.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <View style={style.imageContainer}>
        <Image source={signupImg} resizeMode="center" style={style.image} />
      </View>
      <View style={style.titleContainer}>
        <Text style={style.title}> Create account </Text>
      </View>
      <View style={style.form}>
        <View style={style.formItem}>
          <Icon name="person-sharp" style={style.icon} />
          <TextInput style={style.input} placeholder="Username" />
        </View>
        <View style={style.formItem}>
          <Icon name="call" style={style.icon} />
          <TextInput style={style.input} placeholder="Phone" />
        </View>
        <View style={style.formItem}>
          <Icon name="mail" style={style.icon} />
          <TextInput style={style.input} placeholder="Email" />
        </View>
        <View style={style.formItem}>
          <Icon name="lock-closed" style={style.icon} />
          <TextInput style={style.input} placeholder="Password" />
        </View>
        <TouchableOpacity
          style={{
            ...style.formItem,
            ...style.loginBtn,
          }}
        >
          <Text style={style.loginText}>REGISTER</Text>
        </TouchableOpacity>
        <Text onPress={() => navigation.navigate("Login")}>
          Already have account?Login
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    height: "100%",
  },

  imageContainer: {
    width: "100%",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    color: "#16324F",
    marginBottom: SIZES.xLarge,
  },
  image: {
    marginTop: 20,
    width: 300,
    height: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: 10,
    columnGap: 5,
  },
  formItem: {
    width: "80%",
    backgroundColor: "#EDEDED",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderRadius: 8,
  },
  icon: { fontSize: 25, color: "#16324fba" },
  input: {
    backgroundColor: "transparent",
    flex: 1,
    fontSize: 15,
    marginLeft: 5,
  },
  loginText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: "#16324F",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  loadingSpinner: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffffca",
    flex: 1,
    justifyContent: "center",
    zIndex: 5,
  },

  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});