import React, { useRef } from 'react';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,TextInput} from 'react-native';
import { useEffect,useState } from 'react';


import axios from 'axios'


export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');

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

        navigate('/');
      });
  };

  return (
    <View style={styles.container2}>
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
    </View>
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
    </View>
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>Photo</Text>
      <TextInput
        style={styles.input}
        placeholder="Photo"
        value={photo}
        onChangeText={handlePhotoChange}
      />
    </View>
  </View>
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
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fieldContainer: {
    marginBottom: 10,
  }





})


