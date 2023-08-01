import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';


const MapingView = ({ navigation, name,gender }) => {
  const [location, setLocation] = useState('')
  

  const onnavigationhandler = () => {
    navigation.navigate('new', { name,gender,location } )
  }



  return <>

    <View style={{ backgroundColor: 'white', height: 50, width: 320, borderRadius: 9, flexDirection: 'row' }}>
      <Entypo name="location-pin" size={24} color="red" style={{ top: 13, left: 13 }} />
      <TextInput
        style={{ left: 18 }}
        placeholder='search for a location'
        onChangeText={(Text) => setLocation(Text)}
      />
    </View>
    <Pressable onPress={() => onnavigationhandler()}>
      <View style={{ backgroundColor: 'red', height: 50, width: 320, top: 25, borderRadius: 9 }}>

        <Text style={{ textAlign: 'center', top: 14, color: 'white' }}>Submit</Text>

      </View>
    </Pressable>
  </>
}

export default MapingView