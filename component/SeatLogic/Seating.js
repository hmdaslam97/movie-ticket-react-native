import { StyleSheet, Button, View, Text, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import MyFlatList from './MyFlatList'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'

const Seating = ({route}) => {
    
    
    const myRows={
        row1:[
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:false,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:false,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:false,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:false,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
        ],
        row2:[
            {empty:true,selected:false},
            {empty:false,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:false,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:false,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
            {empty:true,selected:false},
        ]
    }
    const [rows,setRows]=useState(myRows)

    const rate=route.params.rate

    function payment(){
        Alert.alert("Payment Done! :)")
        setRows(myRows)
    }

    const onSelectRow=(row,index,type)=>{
        let tempRow=row;
        tempRow.map((item,i)=>{
            if(index==i)
            {
                if(item.selected==true)
                {
                    item.selected=false;
                    item.empty=true;
                }
                else{
                    item.selected=true;
                    item.empty=false;
                }
            }
        })
       
       setRows({...rows,[type]:[...tempRow]})
       
    }

    let selectedSeats=[];
    let getAllSeats=(row)=>{
        selectedSeats=[]
        row.map(item=>item.selected&&selectedSeats.push(1))
        return selectedSeats.length;
    }


  return (
    <View style={styles.main}>
        <View style={styles.border}> 
            <View style={styles.screen}><View style={styles.screenBorder}></View></View>
            <View style={styles.arrangement}>
                    <MyFlatList data={rows?.row1} numColumns={3} onSelectRowFn={onSelectRow} rate={rate} colType="col1"/>                   
                    <MyFlatList data={rows?.row2} numColumns={3} onSelectRowFn={onSelectRow} rate={rate} colType="col2"/>                   
            </View>
            <View style={{flexDirection:"row",marginTop:20,padding:5}}>
                <View style={{flexDirection:"row",marginRight:10}} ><Icon name='seat' size={20} color="green"/><Text> Selected</Text></View>
                <View style={{flexDirection:"row",marginRight:10}}><Icon name='seat' size={20} color="red"/><Text> Already Booked</Text></View>
                <View style={{flexDirection:"row",marginRight:10}}><Icon name='seat' size={20} color="grey"/><Text> Unbooked</Text></View>
            </View>
        </View>
        <View style={{margin:5}}>
            <Text style={{margin:2,fontSize:20}}>{`You have selected `+(getAllSeats(rows?.row1)+getAllSeats(rows?.row2))}</Text>
            <Text style={{margin:2,fontSize:20}}>{`Total Cost Rs.`+(getAllSeats(rows?.row1)+getAllSeats(rows?.row2))*rate}</Text>
            <Button title="Make Payment" onPress={payment}/>
        </View>
    </View>
  )
}

export default Seating

const styles = StyleSheet.create({
    main:{
        justifyContent:"center",
        alignItems:"center",
        height:500,
        marginTop:30,
    },
    border:{
        width:"80%",
        height:"70%",
        borderColor:"black",
        borderWidth:1,
        borderRadius:10,
    },
    arrangement:{
        flexDirection:"row",
        marginLeft:50,
        paddingTop:20,
    },
    screen:{
        alignItems:"center",
        marginTop:10,
    },
    screenBorder:{
        borderWidth:1,
        borderColor:"black",
        padding:2,
        width:"60%",
        backgroundColor:"grey",
        marginTop:"2%",
    },
    seats:{

    }
})