import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Dimensions, TextInput, Image, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import fondo from '../assets/img/manga_fondo.jpg'
import goku from '../assets/img/manga2.jpg'


import axios from 'axios'
import apiUrl from '../../api';




const Mangas = () => {
    const [mangas, setMangas] = useState([])
    const [categories, setCategories] = useState([])


    useEffect(() => {
        axios(apiUrl + "mangas")
            .then((res) => setMangas(res.data.response))
            .catch((err) => console.log(err));
    }, [])
    console.log(mangas);
    useEffect(() => {
        axios(apiUrl + "categories")
            .then((res) => setCategories(res.data.categories))
            .catch((err) => console.log(err));
    }, [])
    console.log(categories);




    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={fondo} style={styles.backgroundimage}>
                <Text style={{
                    fontWeight: 'bold', fontSize: 30, color: 'white', backgroundColor: '', justifyContent: 'center',
                    marginTop: 70
                }}>
                    Mangas
                </Text>

            </ImageBackground>

            <View style={{ width: '100%', backgroundColor: 'red', height: 350, marginTop: 68, borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center', justifyContent: 'center' }}>


                <View style={{ borderWidth: 1, borderRadius: 25, borderColor: 'black', width: '90%', height: 130, flexDirection: 'row',alignItems:'center' }}>   
                <View style={{width:'2%',height:'70%',backgroundColor:'green',justifyContent:'center',alignItems:'center',alignContent:'center'}}></View>
                 <View style={{width:'58%',height:'60%',borderColor:'blue',borderWidth: 1,justifyContent:'center',alignItems:'center',gap:20}}> 
                 <Text> titulo</Text>
                    <TouchableOpacity style={{
                        backgroundColor: 'white',
                        width: 90,
                        borderRadius: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text onPress={() => { navigation.navigate('Home') }} style={styles.buttonText}>Read</Text>
                    </TouchableOpacity>
                    </View>
                    <Image source={goku} style={{ height: '100%', width: '40%', borderBottomLeftRadius: 40, borderTopLeftRadius: 40, borderBottomRightRadius: 23, borderTopRightRadius: 23 }}></Image>
                </View>


            </View>
        </ScrollView>
    )
}
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        height: height * 2,


    },
    backgroundimage: {
        width: '100%',
        flex: 1,
        height: 200,
        alignItems: 'center',

    }
})
export default Mangas
