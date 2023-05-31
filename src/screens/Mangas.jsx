import React from 'react'
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,ScrollView,Dimensions,TextInput,Image,TouchableHighlight} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import fondo from '../assets/img/manga_fondo.jpg'
 
import axios from 'axios'
import apiUrl from '../../api';




const Mangas = () => {
const [mangas,setMangas]=useState([])
const [categories,setCategories]=useState([])


useEffect(() => {
    axios(apiUrl + "mangas")
      .then((res) => setMangas(res.data.response))
      .catch((err) => console.log(err));
  }, [])
  console.log(mangas);
   useEffect(() => {
    axios(apiUrl + "categories")
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }, [])
  console.log(categories);



  
  return (
    <ScrollView style={styles.container}>
        <ImageBackground source={fondo} style={styles.backgroundimage}>
            <Text style={{ fontWeight:'bold',fontSize:30,color:'white',backgroundColor:'',justifyContent:'center',
        marginTop:70}}>
                Mangas
            </Text>

        </ImageBackground>
      
      <View style={{width:'100%',backgroundColor:'red',height:800,marginTop:68,borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
        {mangas.map((each)=>(
            <View style={{backgroundColor:'blue',width:'90%',height:'300'}}>

            </View>
        ))}

      </View>
    </ScrollView>
  )
}
const {width,height}=Dimensions.get('window')

const styles = StyleSheet.create({
container:{
    height:height*2,
    
  
},
backgroundimage:{
    width:'100%',
    flex:1,
    height:200,
    alignItems: 'center',
    
}
})
export default Mangas
