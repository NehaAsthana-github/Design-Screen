import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Box = () => {
  return <>
  <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',height:50,width:320,borderRadius:9,top:-150}}>
    <View style={{flexDirection:'row',width:194,justifyContent:'space-between',left:15,top:10}}>
      <Ionicons name="ios-images" size={24} color="red" />
      <Text>Custom Image Uploader</Text>
      </View>
      <View style={{top:10,left:-15}}>
      <Octicons name="browser" size={24} color="red"/>
      </View>
      </View>


      
      </>
}

export default Box


