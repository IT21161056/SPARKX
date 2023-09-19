import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import ElectricianMoreInfoCard from '../components/electrcianMoreInfoCard';
import { FlatList } from 'react-native-gesture-handler';

export default function ElectricianMoreInfo ({ route })  {

  const { data } = route.params;

  return (
    <SafeAreaView>
        <View>
        {/* <FlatList
            renderItem={({ item }) => <ElectricianMoreInfoCard data = { item }/>}
        /> */}
        <Text></Text>
        </View>
    </SafeAreaView>
  )
}

