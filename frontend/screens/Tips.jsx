import React, { useState } from "react";
import { SIZES, COLORS } from "../constants/theme";
import MyButton from "../components/customeBtn";
import searchIcon from "../assets/search.png";
import TipCard from "../components/TipCard";
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

const tipsData = [
  {
    id: 1,
    tip: "Energy Saving Tip 1",
    imageUrl: require("../assets/emoji.png"),
  },
  {
    id: 2,
    tip: "Energy Saving Tip 2",
    imageUrl: require("../assets/emoji.png"),
  },
  {
    id: 3,
    tip: "Energy Saving Tip 3",
    imageUrl: require("../assets/emoji.png"),
  },

  {
    id: 4,
    tip: "Energy Saving Tip 4",
    imageUrl: require("../assets/emoji.png"),
  },

  {
    id: 5,
    tip: "Energy Saving Tip 5",
    imageUrl: require("../assets/emoji.png"),
  },

  {
    id: 6,
    tip: "Energy Saving Tip 6",
    imageUrl: require("../assets/emoji.png"),
  },
  {
    id: 7,
    tip: "Energy Saving Tip 7",
    imageUrl: require("../assets/emoji.png"),
  },
  {
    id: 8,
    tip: "Energy Saving Tip 8",
    imageUrl: require("../assets/emoji.png"),
  },
  {
    id: 9,
    tip: "Energy Saving Tip 9",
    imageUrl: require("../assets/emoji.png"),
  },
  {
    id: 10,
    tip: "Energy Saving Tip 10",
    imageUrl: require("../assets/emoji.png"),
  },
];

const data = [1, 2];
const jobTypes = ["All", "Experience"];

export default function Tips() {
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
                borderWidth: 1,
                borderRadius: SIZES.small,
                padding: SIZES.small,
                height: 48,
              }}
              placeholder="Search items..."
            />
            <MyButton iconUrl={searchIcon} dimension="80%" />
          </View>
          <View style={style.tabsContainer}>
            <FlatList
              data={jobTypes}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={style.tab(activeItemType, item)}
                  onPress={() => {
                    setActiveItemType(item);
                  }}
                >
                  <Text style={style.tabText(activeItemType, item)}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
              contentContainerStyle={{ columnGap: SIZES.small }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View>
            <FlatList
              data={tipsData}
              renderItem={({ item }) => <TipCard data={item} />}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{ columnGap: SIZES.small }}
              vertical
              showsVerticalScrollIndicator={false}
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
