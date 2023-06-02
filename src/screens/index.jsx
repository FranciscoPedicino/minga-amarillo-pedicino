import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Dimensions, TextInput, Image, TouchableHighlight, } from 'react-native';
import email5 from '../assets/img/email5.png'
import candado from '../assets/img/candado2.png'
import fondo2 from '../assets/img/hero-native.png'
import { Alert } from 'react-native'

import hero1 from '../assets/img/manga.jpg'

import { useEffect, useState } from 'react';

import axios from "axios";
import apiUrl from "../../api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const index = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null)


  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const [showForm, setShowForm] = useState(true);

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post(apiUrl + "auth/signin", {
        email: email,
        password: password,
      });

      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("user", JSON.stringify(response.data.user));

      Alert.alert("Signed in!", "You have been successfully signed in.");

      // Redirigir al usuario a la pantalla de inicio (Home)
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "An error occurred while signing in.");
    }
  };
  const checkToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('token');
      setToken(storedToken);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <ScrollView>
        <ImageBackground source={fondo2} style={styles.img}>
          {/* caja1 */}

          <View style={styles.container2}>
            <Text style={styles.text}>For the love of manga</Text>
            <Text style={styles.text2}>"Dive into our manga page and discover an exciting collection of Japanese stories. Explore the fascinating world of manga with us!"</Text>
            <TouchableHighlight
              style={styles.button} onPress={() => { navigation.navigate('mangas') }}>
              <Text style={styles.buttonText}>Explore</Text>
            </TouchableHighlight>
          </View>

          {/* caja2 */}
          {!token && <View style={styles.form}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Welcome back!</Text>
            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', height: 300, width: '90%', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 30 }} >
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Email</Text>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)} 
                  />
                  <Image source={email5} style={styles.icon} />
                </View>
              </View>
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Password</Text>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)} 
                  />
                  <Image source={candado} style={styles.icon} />
                </View>
              </View>
              <TouchableOpacity onPress={handleFormSubmit} style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: 'white', height: 25, width: 200, borderRadius: 15, marginTop: 10 }}>
                <Text  style={styles.buttonText}>sign in</Text>
              </TouchableOpacity>
              <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 2, }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Don't have an account?</Text>
                <Text onPress={() => { navigation.navigate('signup') }} style={styles.buttonText1}>sign up</Text>
              </View>
            </View>



          </View>}

        </ImageBackground>
      </ScrollView>
    </>
  )
}
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container2: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    textColor: 'white'
  },
  img: {
    alignItems: 'center',
    height: height * 2,
    width: '200',

  }, text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40
  },
  text2: {
    color: 'white',
    fontSize: 18,
    width: 280,
  },
  button: {
    height: 40,
    width: 200,
    backgroundColor: 'white',
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,

  },
  buttonText: {
    color: '#66B2CE',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    alignContent: 'center',
    alignItems: 'center'
  }
  ,
  buttonText1: {
    color: '#66B2CE',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 10,
    alignContent: 'center',
    alignItems: 'center',

    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8
  }
  ,
  buttonPressed: {
    backgroundColor: 'orange',
  },
  input: {
    width: 220,
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 15
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fieldContainer: {
    marginBottom: 5,
    height: 70
  },
  form: {
    flex: 0.5,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
    position: 'absolute',
    right: 5
  },
  buttonPressed: {
    backgroundColor: 'orange',
  },
})
export default index
