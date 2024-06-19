import React from 'react'
import {TextInput,Image,View,StyleSheet} from 'react-native'
import searchInput from './searchbar.png'
const searchView=()=>{
   return(
  <View style={styles.container}>
    <Image source={searchInput}/>
    <TextInput placeholder='search' style={styles.txtInput}/>
  </View>

   )
}
const styles= StyleSheet.create({
  container:{
    flexDirection:'row'
  },
 txtInput:{
   borderWidth:10
 }
})

export default searchView
