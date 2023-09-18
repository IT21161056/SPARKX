import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OutageScreen from '../screens/OutageScreen';

const ScreenNav = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Outage" component={OutageScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default ScreenNav;
