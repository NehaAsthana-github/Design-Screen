import React, { useState } from "react";
import { View,Text,StyleSheet,TextInput } from "react-native";
import Green from "./Components/Green";
import Pharagraph from "./Components/pharagraph";
import Box from "./Components/Box";
import User from "./Components/User";
import Gender from "./Components/Gender";
import MapingView from "./Components/MapingView";




const Home=({navigation})=>{
  const [name,setname]=useState('')
  const [gender,setgender]=useState('')
  const getGender=(gender)=>{
setgender(gender)
  }
 
  const gethandlenamefromchild=(text)=>{
setname(text)


  }
  return <>
  <View style={Style.Container}>
    <View style={{top:140}}>
<Green/>
</View>
<View style={{top:140}}>
<Pharagraph/>
</View>
<View style={{top:120}}>
<Box/>
</View>
<View style={{top:115}}> 
<User handlegetname={gethandlenamefromchild}/>
</View>
<View style={{top:90}}>
<Gender getGendertochild={getGender} />
</View>
<View style={{top:50}}>
<MapingView navigation={navigation} name={name} gender={gender}/>
</View>
</View>
  </>
}
export default Home

const Style=StyleSheet.create({
  Container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'pink'

    
  }

})


