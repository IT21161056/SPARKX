import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { 
    SafeAreaView, 
    ScrollView, 
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    TextInput, 
} from 'react-native';
import { SIZES, COLORS } from "../constants/theme";
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ElectricianReg = () => {
    
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleRegistration = () => {
    // Show the success modal
    toggleModal();

    // Automatically close the modal after 3 seconds
    setTimeout(() => {
      toggleModal();
      // Navigate to the next screen
      navigation.navigate('Electricians', { electricianData });
    }, 4000);  // 4000 milliseconds (3 seconds) delay
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView>
           <View style={styles.mainView}>
                <View style={styles.container0}>

                </View>
                <View>
                    <TextInput
                        placeholder='Enter Full Name *'
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Enter Mobile Number *'
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Enter Address *'
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Enter Age *'
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Enter qualifications and experience *'
                        style={styles.inputLarger}
                    />
                    <TouchableOpacity 
                        style={styles.submitButton}
                        onPress={handleRegistration}
                    >
                        <Text style={styles.buttonText}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
           </View> 
        </ScrollView>
    </SafeAreaView>
  )
}

export default ElectricianReg;

const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        padding: SIZES.large,
        width: "100%"
    },

    submitButton:{
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: 40, 
        backgroundColor: "#096FCC",
        borderRadius: SIZES.small,
        marginTop: 20
    },

    buttonText:{
        color: "white",
        fontSize: SIZES.medium,
        textAlign: "center",
    },

  input: {
    fontSize: SIZES.medium,
    borderWidth: 0.4,
    borderColor: '#096FCC',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: "#fff",
    elevation: 10,
  },
  inputLarger: {
    fontSize: 16,
    borderWidth: 0.4,
    borderColor: '#096FCC',
    borderRadius: 15,
    paddingVertical: 25, // Adjust the height as needed
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#fff",
    elevation: 10
  },
  container0: {
    flex: 1,
    width: "100%",
    height: 150,
    flexDirection: "column",
    borderRadius: SIZES.medium,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: "#122B5Cff",
    //marginLeft: 10,
    elevation: 3,
    borderWidth: 0.4,
    borderColor: "#096FCC",
  },
})