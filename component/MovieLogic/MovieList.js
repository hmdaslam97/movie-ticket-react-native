import { StyleSheet, Text, View,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native'
import React from 'react'
import MovieCards from './MovieCards'
import { movieData } from '../../utils/data'
import Navbar from '../Navbar'

export default function MovieList({navigation}) {
  
  return (
    <SafeAreaView style={styles.container}>
      <Navbar/>
      <ScrollView>
      <View style={{marginTop:20,marginLeft:20,flexDirection:"row",flexWrap:"wrap"}}>
        {movieData?.map((item)=>{
            return (
            // <>
            //   <TouchableOpacity onPress={()=>takeToDetails(item.id)}>
            //     <View style={{backgroundColor:"yellow",flexDirection:"row",flexWrap:"wrap"}}>
            //       <MovieCards img={item.img} />
            //     </View>
            //   </TouchableOpacity>
            // </>
                
              <MovieCards img={item.img} id={item.id} routing={navigation}/>
            )
        })}          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    plp:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        flexWrap:"wrap",
    },
    scroller:{
        flexDirection:"row",
        flexWrap:"wrap",
    },
    container:{
        flex:1,
        // borderWidth:1,
        // borderColor:"red"
    }

})