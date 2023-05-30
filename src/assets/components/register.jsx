import React, { useRef } from 'react';
import { View, Button } from 'react-native';

import axios from 'axios'

export default function register() {
  const MyComponent = () => {
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
    }}
  return (
    <div>
      
    </div>
  )
}
