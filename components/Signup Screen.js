import React from 'react'
import {StyleSheet,View,TextInput,Text} from 'react-native'

export default function SignUp(){
return(

  <View style={styles.container}>
   <Text>SignUp</Text>
   <Text> Email</Text>
   <TextInput placeholder='e.g paffedzie@gmail.com'/>
   <Text>Password</Text>
   <TextInput placeholder ='e.g password'/>
  
  
  </View>




)


}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems :'center',
    justifyContent:'center'

  }
})