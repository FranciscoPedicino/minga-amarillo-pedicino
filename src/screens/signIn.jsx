import React, { useRef } from 'react';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity} from 'react-native';


import axios from 'axios'

export default function register() {
/*   const MyComponent = () => {
    const email = useRef(null);
    const password = useRef(null);
    const photo = useRef(null);
  
    const handleForm = () => {
      const formData = new FormData();
      formData.append('email', email.current);
      formData.append('password', password.current);
      formData.append('photo', photo.current);
  
      const data = {
        email: email.current,
        password: password.current,
        photo: photo.current,
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
    }} */
  return (
    <View style={styles.container2}>
      <Text style={{color:'red'}}> holaaaaaaaaa</Text>
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
    textColor:'white'
  }





})


