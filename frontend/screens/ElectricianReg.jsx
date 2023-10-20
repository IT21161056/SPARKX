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
           <View>

           </View> 
        </ScrollView>
    </SafeAreaView>
  )
}

export default ElectricianReg