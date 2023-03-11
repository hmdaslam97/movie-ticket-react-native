import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default Navbar = () => {
  return (
    <View style={styles.nav}>
      <Text style={styles.text}>Book <Text style={styles.redText}>My</Text> Ticket</Text>
      <TextInput type="text" style={styles.input} placeholder="Search here..." />
    </View>
  )
}

const styles = StyleSheet.create({
  nav:{
    // marginTop:10,
    flexDirection:"row",
    width:"100%",
    height:40,
    backgroundColor:"#b3b3b3",
    // borderColor:"red",
    // borderWidth:2,
},
text:{
    // borderColor:"red",
    // borderWidth:2,
    fontSize:20,
    paddingHorizontal:10,
    paddingVertical:5,
    width:"40%",
},  
redText:{
  color:"red",
},
input:{
    width:"55%",
    height:"70%",
    fontSize:18,
    paddingHorizontal:30,
    borderRadius:40,
    backgroundColor:"white",
    marginVertical:5,
    // borderColor:"red",
    // borderWidth:1,
}
})