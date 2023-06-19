import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Dimensions, TextInput, Image, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import fondo from '../assets/img/manga_fondo.jpg'
import fondo2 from '../assets/img/fondo-2.png'
import { Input } from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import b from '../assets/img/3.jpg'
import pensando from '../assets/img/pensando.jpg'
import pensando1 from '../assets/img/pensado-1.jpg'




import axios from 'axios'
import apiUrl from '../../api';
import { BackgroundImage } from 'react-native-elements/dist/config';




const Mangas = () => {
    const navigation = useNavigation()

    const titleRef = useRef("");
    const categoryRef = useRef([]);

    const [mangas, setMangas] = useState([])
    const [categories, setCategories] = useState([])
    const [hasNextPage, setHasNextPage] = useState(true);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [page, setPage] = useState(1)
    const [reload, setReload] = useState(false)





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

    const next = () => {
        if (mangas.length > 0) {
            setPage(page + 1);
        }
    };

    const prev = () => {
        if (mangas) setPage(page - 1);
    }
    const captureText = () => {
        setReload(!reload);
    };
    useEffect(() => {
        let categories = Object.values(categoryRef.current);
        let values = [];
        categories.forEach((each) => {
            if (each.checked) {
                values.push(each.value);
            }
        })
        axios(
            apiUrl +
            `mangas?title=${titleRef.current}&category_id=${values.join(",")}&page=${page}&limit=6&order=1`
        )
            .then((res) => {
                setMangas(res.data.response);
                setHasNextPage(res.data.response.length > 0);
                setHasPrevPage(page > 1);
            })
    }, [page, reload])



    return (
        <ScrollView style={styles.container}>
            {token ? (
                <>
                    <ImageBackground source={fondo2} style={styles.backgroundimage}>
                        <Text style={{
                            fontWeight: 'bold', fontSize: 30, color: 'white', backgroundColor: '', justifyContent: 'center',
                            marginTop: 70
                        }}>
                            Mangas
                        </Text>
                        <Input
                            style={{ fontSize: 20, width: "100%", padding: 4, marginTop: 70, borderRadius: 20, backgroundColor: "white" }}
                            leftIcon={<Icon name="search" size={24} color="pink" style={{ marginTop: 70 }} />}
                            defaultValue={titleRef.current}
                            placeholder="Find your manga here"
                            onChangeText={(text) => {
                                titleRef.current = text;
                                captureText();
                            }}

                        />
                    </ImageBackground>

                    <View style={{ width: '100%', backgroundColor: 'white', height: 900,  borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center',position:'relative',bottom:25 }}>

                        {mangas.map((each) => {
                            let category = categories.find((c) => c._id === each.category_id);
                            return (
                                <View style={{
                                    borderRadius: 25, borderColor: 'black', width: '90%', height: 120, flexDirection: 'row', alignItems: 'center', marginTop: 40, backgroundColor: '#F8FAFC'
                                    , shadowColor: '#005',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.5,
                                    shadowRadius: 3.84,
                                    elevation: 80,
                                }}>
                                    <View style={{
                                        width: '2%',
                                        height: '70%',
                                        backgroundColor: category ? category.color : null,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                        marginLeft: 2
                                    }}>
                                    </View>
                                    <View style={{ width: '63%', height: '70%', justifyContent: 'center', alignItems: 'center', gap: 30 }}>
                                        <Text style={{ fontSize: 16 }}> {each.title}</Text>
                                        <TouchableOpacity style={{
                                            backgroundColor: '#66B2CE',
                                            width: 90,
                                            borderRadius: 15,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Text onPress={() => navigation.navigate("readmangas", { id: `${each._id}` })} style={[styles.buttonText, { lineHeight: 30 }]}>Read</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Image source={each.cover_photo} style={{ height: '100%', width: '35%', borderBottomLeftRadius: 40, borderTopLeftRadius: 40, borderBottomRightRadius: 23, borderTopRightRadius: 23 }}></Image>
                                </View>)
                        })}


                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: 'row' }}>
                        {hasPrevPage && (
                            <TouchableOpacity
                                style={{
                                    borderColor: "white",
                                    borderWidth: 1,
                                    borderRadius: 18,
                                    backgroundColor: "#f472b6",
                                    padding: 10,
                                    marginRight: 8,
                                    marginTop: 80

                                }}
                                onPress={prev}
                            >
                                <Text style={{ color: "white", fontWeight: "bold" }}>PREV</Text>
                            </TouchableOpacity>
                        )}
                        {hasNextPage && (
                            <TouchableOpacity
                                style={{
                                    borderColor: "white",
                                    borderWidth: 1,
                                    borderRadius: 18,
                                    backgroundColor: "#66B2CE",
                                    padding: 10,
                                    marginTop: 80

                                }}
                                onPress={next}
                            >
                                <Text style={{ color: "white", fontWeight: "bold" }}>NEXT</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </>
            ) :

                <BackgroundImage source={pensando1} style={{ height: 433, width: '100%', backgroundColor: 'green' }}>

                    <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'bold',backgroundColor: 'rgba(255, 255, 255, 0.8)' }}> you have not registered</Text>
                        <TouchableOpacity style={{ width: '70%', justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: '#66B2CE', height: 25, borderRadius: 15, marginTop: 10 }}>
                            <Text onPress={() => navigation.navigate('signup')} style={styles.buttonText}>Mangas</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'bold',backgroundColor: 'rgba(255, 255, 255, 0.4)' }}> you have not logged in</Text>
                        <TouchableOpacity style={{ width: '70%', justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: '#66B2CE', height: 25, borderRadius: 15, marginTop: 10 }}>
                            <Text onPress={() => navigation.navigate('Home')} style={styles.buttonText}>Sign in</Text>
                        </TouchableOpacity>
                    </View>

                </BackgroundImage>
            }
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
        flex: 100,
      height:300,
        alignItems: 'center',


    },
    buttonText: {
        color: 'white',
        height: 30,
        fontWeight:'bold'
    }

})
export default Mangas
