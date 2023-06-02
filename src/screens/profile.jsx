import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import { useEffect, useState, useRef } from "react";

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
    <View style={styles.container}>
        <Image></Image>
        <Text>email</Text>
        <TouchableOpacity onPress={logout}>
        <Text>logout</Text>
        </TouchableOpacity>
      
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        width:'100%'
    }
})

export default profile
