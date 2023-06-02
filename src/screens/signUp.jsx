import React, { useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import left from '../assets/img/left.png'
import goku2 from '../assets/img/manga15.jpg'
import a from '../assets/img/2.jpg'
import b from '../assets/img/3.jpg'
import c from '../assets/img/4.jpg'
import d from '../assets/img/5.jpg'


import goku3 from '../assets/img/manga10.jpg'
import email5 from '../assets/img/email2.png'
import candado from '../assets/img/candado2.png'
import photo2 from '../assets/img/photo.png'




import { useNavigation } from '@react-navigation/native';


import axios from 'axios'
import apiUrl from '../../api';
import { withTheme } from 'react-native-elements';


export default function Register() {
  const [photo, setPhoto] = useState(null);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  


  function handleForm(e) {
    if (!email || !password || !photo) {
      Alert.alert('Missing Fields', 'Please fill in all the fields', [{ text: 'Ok' }]);
      return;
    }
    e.preventDefault()
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('photo', photo);


    axios.post(apiUrl + 'auth/signup', {
      email: email,
      password: password, photo: photo
    })
      .then(res => {
        Alert.alert({
          title: 'User registered',
          icon: 'success',
          confirmButtonText: 'Ok'
        });


        navigation.navigate('Home')

      })

      .catch(err => {
        console.log(err)
        Alert.alert({
          title: 'Check the fields',
          text: err.response.data.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      })

  }
  return (
    <ImageBackground source={c} style={styles.img}>

      <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Welcome!</Text>
      <Text style={{ width: '90%', alignItems: 'center', color: 'white', marginTop: 5 }}>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</Text>
      <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', height: 300, width: '90%', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 30 }}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
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
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
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

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Photo</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
            <TextInput
              style={styles.input}
              placeholder="Photo"
              value={photo}
              onChangeText={text => setPhoto(text)}
            />
            <Image source={photo2} style={styles.icon} />

          </View>
        </View>
        <TouchableOpacity style={{
          flex: 0.3, justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: 'white', height:40, width: 200, borderRadius: 15, marginTop: 20
        }}>
          <Text onPress={(e) => handleForm(e)} style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
        <Text onPress={() => { navigation.navigate('Home') }} style={styles.buttonText1}>Back</Text>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textColor: 'white',
    backgroundColor: 'blue'
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
    marginBottom: 1,
  },
  fieldContainer: {
    fieldContainer: {
      marginBottom: 5,
      height: 70
    }
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
    position: 'absolute',
    right: 5
  },
  button: {
    flex: 0.5,
    width: 200,
    backgroundColor: 'black ',
    borderRadius: 5,
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
    color: '#f472b6',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 10,
    alignContent: 'center',
    alignItems: 'center',
    marginTop:20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8
  }
  ,





})


