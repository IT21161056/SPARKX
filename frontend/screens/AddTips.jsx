import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import happyEmoji from "../assets/happy.png";
import neutralEmoji from "../assets/neutral.png";
import sadEmoji from "../assets/sad.png";
import smileEmoji from "../assets/smile.png";
import worstEmoji from "../assets/worst.png";
import { SIZES, COLORS } from "../constants/theme";

const experienceOptions = [
  { label: "Best", emoji: happyEmoji },
  { label: "Good", emoji: smileEmoji },
  { label: "Normal", emoji: neutralEmoji },
  { label: "Bad", emoji: sadEmoji },
  { label: "Worst", emoji: worstEmoji },
];

export default function AddTips({ route }) {
  const [userName, setUserName] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("Best");
  const [suggestion, setSuggestion] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddTip = () => {
    // Handle the logic for adding the tip with user's name, experience, and suggestion.
  };

  const handleCancel = () => {
    // Handle the cancel action here.
  };

  return (
    <View style={style.container}>
      <Image
        source={require("../assets/tips.jpeg")}
        resizeMode="center"
        style={style.image}
      />
      <View style={style.titleContainer}>
        <Text style={style.title}> Add a New Energy Saving Tips </Text>
      </View>
      <View style={style.form}>
        <View style={style.formItem}>
          <TextInput
            style={style.input}
            placeholder="Your Name"
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
        </View>
        <View style={style.formItem}>
          <Picker
            selectedValue={selectedExperience}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedExperience(itemValue)
            }
            style={style.input}
          >
            <Picker.Item
              label="Select Energy Saving Experience"
              value=""
              style={style.pick}
            />
            {experienceOptions.map((option) => (
              <Picker.Item
                key={option.label}
                label={option.label}
                value={option.label}
                style={style.pick}
              />
            ))}
          </Picker>
        </View>
        <View style={style.formItem}>
          <TextInput
            style={style.input}
            placeholder="Add Your Suggestion"
            value={suggestion}
            onChangeText={(text) => setSuggestion(text)}
            multiline={true}
            numberOfLines={5}
          />
        </View>
        <TouchableOpacity
          style={{
            ...style.formItem,
            ...style.loginBtn,
          }}
          onPress={handleAddTip}
        >
          <Text style={style.loginText}>SUBMIT</Text>
        </TouchableOpacity>
        {showSuccessMessage && (
          <Text style={styles.successMessage}>Successfully added!</Text>
        )}
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
    width: "100%",
    height: 150,
    marginBottom: 20,
    borderRadius: 30,
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

  pick: {
    fontSize: 15,
    borderWidth: 2,
    borderColor: COLORS.gray,
    flex: 1,
    backgroundColor: "transparent",
    padding: 0,
    color: COLORS.gray,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: COLORS.gray,
  },
});
