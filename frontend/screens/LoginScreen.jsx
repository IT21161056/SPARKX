import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

export default function LoginScreen() {

    const navigation = useNavigation();
    return (
        <View>
            <Text> LoginScreen </Text>
            <Button onPress={() => navigation.navigate("Tabs")} title='Tabs'></Button>
            <Button onPress={() => navigation.navigate("Register")} title='Register'></Button>
        </View>
    );
}


