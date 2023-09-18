import React, { useState } from "react";
import { SIZES, COLORS } from "../constants/theme";
import MyButton from "../components/customeBtn";
import searchIcon from "../assets/search.png";
import ElectricianCard from "../components/electricianCard";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const electriciansData = [
  {
    id: 1,
    name: "Ashan Perera",
    age: 34,
    location: "Hoamagama",
    rating: 4.7,
    imageUrl: require('../assets/e1.png'),
  },
  {
    id: 2,
    name: "Deshan Fernando",
    age: 28,
    location: "Kottawa",
    rating: 4.4,
    imageUrl: require('../assets/e9.jpg'),
  },
  {
    id: 3,
    name: "Nimal Perera",
    age: 35,
    location: "Matara",
    rating: 4.3,
    imageUrl: require('../assets/e6.jpg'),
  },

  {
    id: 4,
    name: "Nimal Perera",
    age: 35,
    location: "Matara",
    rating: 4.3,
    imageUrl: require('../assets/e6.jpg'),
  },

  {
    id: 5,
    name: "Nimal Perera",
    age: 35,
    location: "Matara",
    rating: 4.3,
    imageUrl: require('../assets/e6.jpg'),
  },
  
];

const data = [1, 2, 3, 4, 5];
const jobTypes = ["All", "Electrcians", "House Wiring", "A/C Repair"];

export default function Electrcians() {
  const [activeItemType, setActiveItemType] = useState("All");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.large }}>

          <View
            style={{
              marginTop: SIZES.large,
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                flex: 1,
                fontSize: SIZES.medium,
                color: COLORS.gray,
                backgroundColor: "#fff",

                borderStyle: "solid",

                borderWidth: 2,
                borderColor: "#3E92CC",
                borderRadius: SIZES.small,
                padding: SIZES.small,
                height: 48,
              }}
              placeholder="Search items..."
            />
            <MyButton iconUrl={searchIcon} dimension="80%" />
          </View>
          <View>
            <FlatList
              data={ electriciansData }
              renderItem={({ item }) => <ElectricianCard data={ item }/>}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{ columnGap: SIZES.small }}
              vertical
              showsHorizontalScrollIndicator={false}
              style={{
                paddingTop: SIZES.medium,
                paddingBottom: SIZES.medium,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
  },

  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: "#3E92CC",
    backgroundColor: activeJobType === item ? "#3E92CC" : "transparent",
  }),
  tabText: (activeJobType, item) => ({
    color: activeJobType === item ? COLORS.white : "#3E92CC",
  }),
});
