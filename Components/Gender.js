import { View, Text, Pressable} from 'react-native'
import React, { useState } from 'react'




const Gender = ({getGendertochild}) => {




    const gender=['Male','Female','Other']

    const [innerCircleVisible,setInnerCircleVisible]=useState()
    
    const gender1Circle=(value)=>{
       getGendertochild(value)
        setInnerCircleVisible(value)
    }
    
  return <>
    
      <Text style={{fontSize:25,color:'gray',top:-85}}>Gender</Text>
      <View style={{flexDirection:'row',width:300,justifyContent:'space-evenly',top:-60}}>
      {gender.map((value,id)=>(<>
<Pressable onPress={()=>gender1Circle(value)}>
      <View style={{borderRadius:50,borderColor:'yellow',borderWidth:2,width:50,height:50}}>

      {innerCircleVisible===value?<View style={{backgroundColor: 'red',width: 40, height: 40, borderRadius: 50, top: 3, left: 3}}></View>:null}
      </View>
 
      </Pressable>
      <Text style={{top:15,fontSize:16}} >{value}</Text>
      </>))}
      
    </View>
    </>
}

export default Gender