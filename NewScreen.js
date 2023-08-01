import { View, Text,Image } from 'react-native'
import React from 'react'
import image123 from './assets/image123.jpg'
const NewScreen = ({route}) => {
  const{name,gender,location}=route.params
  return (
    <View style={{backgroundColor:'cyan',width:'100%',flex:1}}>
      <View>
        <Image source={image123} style={{width:'100%',height:'65%'}}/>
        </View>
        <View style={{alignSelf:'center',flexDirection:'row',width:200,height:50,top:-90,borderWidth:2,borderRadius:9,backgroundColor:'pink'}}>
      <Text style={{ left:50,top:10,color:'red',fontSize:20,fontWeight:'bold'}} >NewScreen</Text>
      </View>
      <View style={{alignSelf:'center',flexDirection:'row',width:200,height:50,top:-80,borderWidth:2,borderRadius:9,backgroundColor:'pink'}}>
<View style={{alignSelf:'center'}}>
      <Text style={{ textAlign:'center',color:'red',fontSize:20,fontWeight:'bold'}}>{name}</Text>
      </View>
      </View>
      <View style={{alignSelf:'center',flexDirection:'row',width:200,height:50,top:-70,borderWidth:2,borderRadius:9,backgroundColor:'pink'}}>
      <Text style={{ left:60,top:10,color:'red',fontSize:20,fontWeight:'bold'}}>{gender}</Text>
      </View>
      <View style={{alignSelf:'center',flexDirection:'row',width:200,height:50,top:-60,borderWidth:2,borderRadius:9,backgroundColor:'pink'}}>
      <Text style={{ left:60,top:10,color:'red',fontSize:20,fontWeight:'bold'}}>{location}</Text>
      </View>
    </View>  
  )
}

export default NewScreen