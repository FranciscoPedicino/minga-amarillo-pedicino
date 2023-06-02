import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import { useEffect, useState, useRef } from "react";
import b from '../assets/img/manga15.jpg'

import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Dimensions, TextInput, Image, TouchableHighlight, } from 'react-native';


import axios from "axios";
import apiUrl from "../../api";



const profile = () => {
  const navigation = useNavigation()

  const [token, setToken] = useState(null);
  const isFocused = useIsFocused();

  const checkToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('token');
      setToken(storedToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkToken();
  }, [isFocused])
  const logout = async () => {
    try {
      // Lógica para eliminar el token y cualquier otra información de autenticación guardada
      await AsyncStorage.removeItem('token');
      // Opcional: También puedes eliminar otros datos guardados, como el usuario, si es necesario
      await AsyncStorage.removeItem('user');

      // Redirigir al usuario a la pantalla de inicio (Home)
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'An error occurred while logging out.');
    }
}

  return (
    <ImageBackground source={b} style={styles.container}>
        <Image></Image>
        <Text style={{fontSize:15,fontWeight:'bold',color:'black',backgroundColor: 'rgba(255, 255, 255, 0.6)',borderRadius:12,padding:20,width:'50%',height:5, textAlign: 'center',marginBottom:30}}>email</Text>
        <TouchableOpacity onPress={logout} style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: 'white', height: 25, width: 200, borderRadius: 15, marginTop: 10 }}>
        <Text style={styles.buttonText}>logout</Text>
        </TouchableOpacity>
      
    </ImageBackground>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText: {
      color: '#66B2CE',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 10,
      alignContent: 'center',
      alignItems: 'center'
    }
})

export default profile
