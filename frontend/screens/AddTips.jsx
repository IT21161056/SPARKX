import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
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
import { COLORS } from "../constants/theme";

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
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Add a New Energy Saving Tip</Text>
      <Image
        source={require("../assets/tips.jpeg")} // Add the path to your image
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />
      <Text style={styles.label}>Select Your Energy Saving Experience:</Text>
      <Picker
        selectedValue={selectedExperience}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedExperience(itemValue)
        }
        style={styles.pick}
      >
        {experienceOptions.map((option) => (
          <Picker.Item
            key={option.label}
            label={option.label}
            value={option.label}
          />
        ))}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Add Your Suggestion"
        value={suggestion}
        onChangeText={(text) => setSuggestion(text)}
        multiline={true}
        numberOfLines={5}
      />
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.buttonContainer1, styles.cancelButton]}
          onPress={handleCancel}
        >
          <Text style={[styles.buttonText, styles.cancelButtonText]}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleAddTip}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        {showSuccessMessage && (
          <Text style={styles.successMessage}>Successfully added!</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.white,
  },
  image: {
    width: "100%",
    height: 150, // Adjust the height as needed
    marginBottom: 20,
    borderRadius: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: COLORS.gray,
    padding: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  pick: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: COLORS.gray,
    padding: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer1: {
    flex: 1,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  buttonContainer: {
    flex: 1,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#132930",
    marginLeft: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  cancelButtonText: {
    color: "#132930",
  },
  successMessage: {
    color: "green",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
});
