import React from 'react'
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,ScrollView,Dimensions,TextInput,Image} from 'react-native';
import email5 from '../assets/img/email5.png'
import candado from '../assets/img/candado2.png'

import hero1 from '../assets/img/manga.jpg'

import { useEffect,useState } from 'react';



import { useNavigation } from '@react-navigation/native';

const index = () => {
  const navigation=useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
 
  return (
    <>
    <ScrollView>
    <ImageBackground source={hero1} style={styles.img}>
      {/* caja1 */}

    <View style={styles.container2}>
   <Text style={styles.text}>For the love of manga</Text>
   <Text style={styles.text2}>"Dive into our manga page and discover an exciting collection of Japanese stories. Explore the fascinating world of manga with us!"</Text>

    </View>

    {/* caja2 */}
  <View style={styles.form}>
    <View style={{backgroundColor:'rgba(255, 255, 255, 0.3)',height:250,width:270 ,justifyContent:'center',borderRadius: 5 }} >
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
      <View  style={{ flex: 1,flexDirection: 'row',alignItems:'center',borderWidth: 1,borderColor: 'gray'}}>
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
    <View style={{flex: 1,flexDirection: 'row', borderColor:'gray',alignItems:'center', justifyContent:'center' ,borderWidth:1,}}>
    <Text>Don't have an account?</Text>
   <Text onPress={()=>{navigation.navigate('singUp')}} style={styles.buttonText}>sign up</Text>
   </View>
    </View>
    
  

    </View>

    </ImageBackground>
    </ScrollView>
    </>
  )
}
const {width,height}=Dimensions.get('window')

const styles = StyleSheet.create({
    container2: {
      flex:0.5,
      borderWidth: 1, 
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      textColor:'white'
    },
    img:{
      alignItems:'center',
      height:height*2,
      width:'200',
      
    },text:{
      color:'white',
      fontSize: 24,
    fontWeight: 'bold',
    marginBottom:40
    },
    text2:{
      color:'white',
      fontSize: 15,
      width:280,
    },
    button: {
      marginTop:25,
      backgroundColor:'#66B2CE',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#66B2CE',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft:10
    },
    input: {
      width: 200,
      height: 40,
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius:15
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    fieldContainer: {
      marginBottom: 10,
      height:70
    
    },
    form:{
      flex:0.5,
      justifyContent:'center',
      width:250,
    },
    icon: {
      width: 25,
      height: 20,
      marginLeft: 10,
      position:'absolute',
      right:70
    }
  })
export default index
