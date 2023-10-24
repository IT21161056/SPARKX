import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import loginImg from "../assets/login_form_img.png";
import { SIZES } from "../constants/theme";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const showAlert = () => {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };
  const login = () => {
    setIsLoading(true);

    axios
      .post("http://192.168.43.95:5000/user/login", credentials)
      .then((response) => {
        const userRoles = response.data.roles;

        if (userRoles.includes("admin")) {
          navigation.navigate("Add Outage");
        } else if (userRoles.includes("supplier")) {
          navigation.navigate("SupplierDashboard");
        } else if (userRoles.includes("electrician")) {
          // navigation.navigate("Pasindu")
        } else {
          navigation.navigate("Tabs");
        }

        setIsLoading(false);
      })
      .catch((error) => {
        showAlert();
      });
  };

  console.log(credentials);

  return (
    <View style={style.container}>
      {isLoading && (
        <View style={[style.loadingSpinner, style.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <View style={style.imageContainer}>
        <Image source={loginImg} resizeMode="center" style={style.image} />
      </View>
      <View style={style.titleContainer}>
        <Text style={style.title}> Login into your account </Text>
      </View>
      <View style={style.form}>
        <View style={style.formItem}>
          <Icon name="mail" style={style.icon} />
          <TextInput
            style={style.input}
            placeholder="Email"
            onChangeText={(e) =>
              setCredentials((prv) => {
                return {
                  ...prv,
                  email: e,
                };
              })
            }
          />
        </View>
        <View style={style.formItem}>
          <Icon name="lock-closed" style={style.icon} />
          <TextInput
            style={style.input}
            placeholder="Password"
            onChangeText={(e) =>
              setCredentials((prv) => {
                return {
                  ...prv,
                  password: e,
                };
              })
            }
          />
        </View>
        <TouchableOpacity
          style={{
            ...style.formItem,
            ...style.loginBtn,
          }}
          onPress={login}
        >
          <Text style={style.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <Text onPress={() => navigation.navigate("Register")}>
          Don’t have an account? sign up
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
