import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { movieData } from '../../utils/data';

export default function MoviePage({route,navigation}) {
  const id=route.params.movieId;
  const data=movieData.filter((item)=>{return id==item.id})[0];
  function takeToSeating(rate){
    navigation.navigate("Seats",{rate})
  }
  return (
    <ScrollView style={{backgroundColor:"white",padding:10,}}>
      <View style={{paddingLeft:"20%"}}>
        <Image source={data.img} style={{width:"70%",height:300,objectFit:"cover",borderRadius:10}}/>
      </View>
      <Text style={{fontSize:30,fontWeight:"bold",margin:5}}>{data.name}</Text>
      <Text style={{fontSize:20,margin:5,}}>Rating: {data.rating} / 10</Text>
      <Text style={{fontSize:15,margin:5}}>Story: {data.description}</Text>
      <View style={{width:"50%",marginHorizontal:"25%",}}>
        <Button onPress={()=>takeToSeating(data.stdRate)}  title='Book Ticket Now' />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})