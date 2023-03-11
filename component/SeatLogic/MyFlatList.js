import { StyleSheet,FlatList,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'

export default function MyFlatList({data,numColumns,onSelectRowFn=()=>false,colType}) {
  return (
    <FlatList data={data} numColumns={numColumns} renderItem={({item,index})=>{
        return (
        // Note here item, index are passed inside object  || use horizontal to place items in x axis
        <TouchableOpacity style={{}} onPress={()=>{
            if(item.selected==false && item.empty==false)
            { Alert.alert("Already booked") }
            else{ onSelectRowFn(data,index,colType) }
        }}>
        {
            item.empty==false && item.selected==true?(<Icon name='seat' size={30} color="green"/>):
            item.empty==true && item.selected==false?(<Icon name='seat' size={30} color="grey"/>):
            item.empty==false && item.selected==false?(<Icon name='seat' size={30} color="red"/>):
            null
        }
        </TouchableOpacity>
        )
    }}/>
  )
}

const styles = StyleSheet.create({})