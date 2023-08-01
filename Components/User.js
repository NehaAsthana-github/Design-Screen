import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';

const User = ({handlegetname}) => {
const [name,setname]=useState(" ")
  const handlesetnameinchild=(text)=>{
setname(text)
handlegetname(text)
  }

  return (
    <View style={{backgroundColor:'white',height:50,flexDirection:'row',width:320,borderRadius:9,top:-110}}>
      <FontAwesome name="user" size={24} color="red" style={{top:10,left:15}}/>
      <TextInput
      style={{left:25}}
    placeholder='Enter Your Name'
      onChangeText={(text)=>handlesetnameinchild(text)}
      />
    </View>
  )
}

export default User