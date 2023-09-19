import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Electricians from "./screens/Electricians";
import ElectricianMoreInfo from "./screens/ElectricianMoreInfo";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
      <Stack.Navigator initialRouteName="Electricians">
        <Stack.Screen name="Electricians" component={Electricians} />
        <Stack.Screen name="ElectricianMoreInfo" component={ElectricianMoreInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
