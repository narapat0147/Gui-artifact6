import React from 'react';
import {View,Text} from 'react-native';
function App(){
  return(
    <View style={{justifyContent:"center",
    flex:1,
    alignItems:"center"
    }}>
      <Text style={{color:"red",fontSize:"20px",fontWeight:"bold"}}>I love my cat</Text>
    </View>
  )
}
export default App;