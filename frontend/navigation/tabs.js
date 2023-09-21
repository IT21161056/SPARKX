import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import CartScreen from "../screens/Cart";
<<<<<<< HEAD
import ElectriciansScreen from "../screens/Electricians";
=======
import HomeScreen from "../screens/Home";
>>>>>>> 492b753e3e158e31d32efc064220921070da6180
import MapScreen from "../screens/Map";
import OutageScreen from "../screens/OutageScreen";
import ProfileScreen from "../screens/Profile";
import TipsScreen from "../screens/Tips";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 50,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Items"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/ic_home.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#3E92CC" : "#a5bcc4",
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Tips"
        component={TipsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/ic_paperclip.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#3E92CC" : "#a5bcc4",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="OutageMap"
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/ic_map.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#3E92CC" : "#a5bcc4",
                }}
              />
            </View>
          ),
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Outage" component={OutageScreen} />
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Electricians"
        component={ElectriciansScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/ic_profile.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#3E92CC" : "#a5bcc4",
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/ic_shopping_cart.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#3E92CC" : "#a5bcc4",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#3E92CC",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
});
