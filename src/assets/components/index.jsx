import React from 'react'
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity} from 'react-native';
import hero from '../img/hero-native.png'

const index = () => {
  return (
    <>
    <ImageBackground source={hero} style={styles.img}>
    <View style={styles.container2}>
   <Text style={styles.text}>For the love of manga</Text>
   <TouchableOpacity style={styles.button}>
   <Text style={styles.buttonText}>sign in</Text>
   </TouchableOpacity>
    </View>
    </ImageBackground>
   
    </>
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
    },
    img:{
      flex:1,
      alignItems:'center',
      height:'150',
      width:'200',
      
    },text:{
      color:'white',
      fontSize: 24,
    fontWeight: 'bold',
    },
    button: {
      backgroundColor: 'blue',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  })
export default index
