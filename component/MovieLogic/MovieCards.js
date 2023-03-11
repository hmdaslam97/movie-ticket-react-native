import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function MovieCards({img,id,routing}) {
  function takeToDetails(movieId){
    routing?.navigate("MoviePage",{movieId})
  }

  return (
      <TouchableOpacity style={styles.card} onPress={()=>takeToDetails(id)}>
        <Image source={img} style={styles.img}/>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card:{
        width:"50%",
        height:300,
        flexDirection:"row",
    },
    img:{
        width:"90%",
        height:"90%",
        borderRadius:10,        
    },
})