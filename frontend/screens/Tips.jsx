import React, { useEffect, useState } from "react";
import { SIZES, COLORS } from "../constants/theme";
import MyButton from "../components/customeBtn";
import searchIcon from "../assets/search.png";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const jobTypes = ["All", "Experience"];

export default function Tips() {
  const [activeItemType, setActiveItemType] = useState("All");
  const [showTips, setShowTips] = useState(true); // State variable to control tips visibility

  const [tips, setTips] = useState([
    { name: "Energy Saving Tip 01", key: "1" },
    { name: "Energy Saving Tip 02", key: "2" },
    { name: "Energy Saving Tip 03", key: "3" },
    { name: "Energy Saving Tip 04", key: "4" },
    { name: "Energy Saving Tip 05", key: "5" },
    { name: "Energy Saving Tip 06", key: "6" },
    { name: "Energy Saving Tip 07", key: "7" },
    { name: "Energy Saving Tip 08", key: "8" },
    { name: "Energy Saving Tip 09", key: "9" },
    { name: "Energy Saving Tip 10", key: "10" },
  ]);

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
            <MyButton
              iconUrl={searchIcon}
              dimension="80%"
              onPress={() => {
                // Update the condition here based on your requirements
                setShowTips(!showTips); // Toggle the condition
              }}
            />
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
            />
          </View>

          {showTips && (
            <View style={style.tipsContainer}>
              <FlatList
                keyExtractor={(item) => item.key}
                data={tips}
                renderItem={({ item }) => (
                  <Text style={styles.item}>{item.name}</Text>
                )}
              />
            </View>
          )}
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

const styles = StyleSheet.create({
  tipsContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    paddingBottom: 40,
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
