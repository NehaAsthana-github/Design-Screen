import React from "react";
import { View,Text,StyleSheet } from "react-native";

const Green=()=>{
    return<>
<View style={{alignItems:'center',top:100,flexDirection:'row'}}>
    <Text style={{alignSelf:'center',top:-310,fontSize:50,fontWeight:'bold'}}>Green</Text>
    <Text style={{alignSelf:'center',top:-310,color:'red',fontSize:50,fontWeight:'bold'}}>Light</Text>
</View>

    </>
}
export default Green

// const style=StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems:'center'
//     }
// })