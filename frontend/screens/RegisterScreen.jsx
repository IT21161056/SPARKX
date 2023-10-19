import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

export default function RegisterScreen() {

    const navigation = useNavigation();
    return (
        <View>
            <Text> RegisterScreen </Text>
            <Button onPress={() => navigation.navigate("Login")} title='Login'></Button>
        </View>
    );
}


