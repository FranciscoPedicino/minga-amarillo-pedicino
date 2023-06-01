import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Dimensions, TextInput, Image, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import fondo from '../assets/img/manga_fondo.jpg'
import goku from '../assets/img/manga2.jpg'
import { Input } from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"


import axios from 'axios'
import apiUrl from '../../api';




const Mangas = () => {
    const titleRef = useRef("");
    const categoryRef = useRef([]);

    const [mangas, setMangas] = useState([])
    const [categories, setCategories] = useState([])
    const [hasNextPage, setHasNextPage] = useState(true);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [page, setPage] = useState(1)
    const [reload, setReload] = useState(false)

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
            <ImageBackground source={fondo} style={styles.backgroundimage}>
                <Text style={{
                    fontWeight: 'bold', fontSize: 30, color: 'white', backgroundColor: '', justifyContent: 'center',
                    marginTop: 70
                }}>
                    Mangas
                </Text>
                <Input
                    style={{ fontSize: 20, width: "100%", padding: 4, borderRadius: 20, backgroundColor: "white" }}
                    leftIcon={<Icon name="search" size={24} color="pink" />}
                    defaultValue={titleRef.current}
                    placeholder="Find your manga here"
                    onChangeText={(text) => {
                        titleRef.current = text;
                        captureText();
                    }}

                />
            </ImageBackground>

            <View style={{ width: '100%', backgroundColor: 'white', height: 350, marginTop: 68, borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                <ScrollView style={{ width: '100%', padding: 10 }} >
                    {mangas.map((each) => {
                        let category = categories.find((c) => c._id === each.category_id);
                        return (
                            <View style={{ borderWidth: 1, borderRadius: 25, borderColor: 'black', width: '90%', height: 130, flexDirection: 'row', alignItems: 'center', marginTop: 20, backgroundColor: 'green' }}>
                                <View style={{
                                    width: '2%',
                                    height: '70%',
                                    backgroundColor: category ? category.color : null,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignContent: 'center'
                                }}>
                                </View>
                                <View style={{ width: '58%', height: '70%', borderColor: 'blue', borderWidth: 1, justifyContent: 'center', alignItems: 'center', gap: 30 }}>
                                    <Text style={{ fontSize: 16 }}> {each.title}</Text>
                                    <TouchableOpacity style={{
                                        backgroundColor: '#66B2CE',
                                        width: 90,
                                        borderRadius: 15,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Text onPress={() => { navigation.navigate('Home') }} style={[styles.buttonText, { lineHeight: 30 }]}>Read</Text>
                                    </TouchableOpacity>
                                </View>
                                <Image source={each.cover_photo} style={{ height: '100%', width: '40%', borderBottomLeftRadius: 40, borderTopLeftRadius: 40, borderBottomRightRadius: 23, borderTopRightRadius: 23 }}></Image>
                            </View>)
                    })}

                </ScrollView>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection:'row' }}>
                {hasPrevPage && (
                    <TouchableOpacity
                        style={{
                            borderColor: "white",
                            borderWidth: 1,
                            borderRadius: 18,
                            backgroundColor: "#f472b6",
                            padding: 16,
                            marginRight: 8,
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
                            padding: 16,
                        }}
                        onPress={next}
                    >
                        <Text style={{ color: "white", fontWeight: "bold" }}>NEXT</Text>
                    </TouchableOpacity>
                )}
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

    },
    buttonText: {
        color: 'white',
        height: 30,
    }

})
export default Mangas
