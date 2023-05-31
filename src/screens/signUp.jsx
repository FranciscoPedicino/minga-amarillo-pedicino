import React, { useRef } from 'react';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,TextInput,Image} from 'react-native';
import { useEffect,useState } from 'react';
import goku from '../assets/img/manga2.jpg'
import goku2 from '../assets/img/manga15.jpg'
import goku3 from '../assets/img/manga10.jpg'
import email5 from '../assets/img/email2.png'
import candado from '../assets/img/candado2.png'
import photo2 from '../assets/img/photo.png'




import { useNavigation } from '@react-navigation/native';

import axios from 'axios'


export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');
  
  const navigation=useNavigation()
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handlePhotoChange = (text) => {
    setPhoto(text);
  };

  const handleForm = () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('photo', photo);
 
    const data = {
      email: email,
      password: password,
      photo: photo,
    };

    axios.post(apiUrl + 'auth/signup', formData)
      .then(res => {
        Swal.fire({
          title: 'User registered',
          icon: 'success',
          confirmButtonText: 'Ok',
        });

  
      });
  };

  return (
   <ImageBackground source={goku3} style={styles.img}>

    <View style={{backgroundColor:'rgba(255, 255, 255, 0.3)',height:250,width:270 ,justifyContent:'center',borderRadius: 5, }}>
    
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>Email</Text>
      <View style={{ flex: 1,flexDirection: 'row',alignItems:'center',borderWidth: 1,borderColor: 'gray'}}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
        <Image source={ email5} style={styles.icon} />
        </View>

    </View>

    <View style={styles.fieldContainer}>
      <Text style={styles.label}>Password</Text>
      <View style={{ flex: 1,flexDirection: 'row',alignItems:'center',borderWidth: 1,borderColor: 'gray'}}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      <Image source={candado} style={styles.icon} />
      </View>

    </View>

    <View style={styles.fieldContainer}>
      <Text style={styles.label}>Photo</Text>
      <View style={{ flex: 1,flexDirection: 'row',alignItems:'center',borderWidth: 1,borderColor: 'gray'}}>
      <TextInput
        style={styles.input}
        placeholder="Photo"
        value={photo}
        onChangeText={handlePhotoChange}
      />
      <Image source={photo2} style={styles.icon} />

      </View>
    </View>
    <TouchableOpacity style={{backgroundColor:'white',
    width:200,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
    position:'relative',
    bottom:25,
    left:20
    }}>
   <Text onPress={()=>{navigation.navigate('Home')}} style={styles.buttonText}>Send</Text>
   </TouchableOpacity>
    </View>
 
  </ImageBackground> 
)
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    height:100,
    borderWidth: 1, 
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textColor:'white',
    backgroundColor:'blue'
  },
  input: {
    width: 220,
      height: 40,
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius:15
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fieldContainer: {
    fieldContainer: {
      marginBottom: 5,
      height:70
    }
  },
  img:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
    position:'absolute',
    right:50
  },
  button: {
    flex: 0.1,
    width:200,
    backgroundColor:'black ',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
    
  },
  buttonText: {
    color: '#66B2CE',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft:10,
    alignContent:'center',
    alignItems:'center'
  }
  ,
  




})


