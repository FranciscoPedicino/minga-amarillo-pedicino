import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Dimensions, TextInput, Image, TouchableHighlight } from 'react-native';
import action_manga from '../store/actions/manga_one'
import action_chapter from '../store/actions/chapter_one'
import sorprendido from '../assets/img/sorprendido.png'
import love from '../assets/img/love.png'
import finger2 from '../assets/img/finger2.png'
import finger1 from '../assets/img/finger1.png'

import { useSelector, useDispatch, } from 'react-redux'
import { useEffect, useState, useRef, } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";






import axios from 'axios'
import apiUrl from '../../api';

const { manga_one } = action_manga
const { chapter_one } = action_chapter
const ReadMangas = () => {

  const dispatch = useDispatch()
  const navigation = useNavigation()

  let storeManga = useSelector(store => store.manga)
  let storeChapter = useSelector(store => store.chapter)

  let [mangas, setMangas] = useState([])
  let [chapters, setChapters] = useState([{ data: [], totalPages: 1 }])
  const [pageChange, setPage] = useState(Number(page))
  const [reload, setReload] = useState(false)

  console.log(storeManga)
  console.log(storeChapter)
  console.log(mangas);
  console.log(chapters);

  const route = useRoute();

  const { id, page } = route.params;
  console.log(id);
  useEffect(() => {
    axios(`${apiUrl}mangas/${id}`)
      .then(res => {
        setMangas(res.data.response)
        dispatch(manga_one({
          title: res.data.response.title,
          cover_photo: res.data.response.cover_photo,
          description: res.data.response.description
        }))
      })
      .catch(err => console.log(err))
  }, [id])
  useEffect(() => {
    axios.get(apiUrl + `chapters?manga_id=${id}&page=${page}&limit=4`)

      .then(res => {
        const data = res.data.response
        setChapters(data)
        dispatch(chapter_one(data))
        setCount(res.data.count)
        setCanpages(res.data.cantPages)


      })
      .catch(err => console.log(err))
  },
    [id, pageChange, reload]
  )




  let [showMangaContent, setShowMangaContent] = useState(true);
  return (
    <>
      {showMangaContent ? (<View style={{ width: '100%', alignItems: 'center', flex: 1, borderBottomWidth: 1, borderBottomColor: 'red' }}>
        <View style={{ height: '50%', borderWidth: 1, width: '90%', alignItems: 'center', marginTop: 20 }}>
          <Image source={mangas?.cover_photo} style={{ width: '90%', height: '90%' }}></Image>
          <Text>{mangas.title}</Text>
        </View>
        <View style={{ width: '90% ', flex: 0.3, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderWidth: 1, marginTop: 10 }}>
          <Text style={{ backgroundColor: 'red' }}>{mangas.category_id?.name}</Text>
          <Text>{mangas?.author_id?.name}</Text>
        </View>
        <View style={{ width: '90%', height: 50, borderBottomWidth: 1, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Image source={finger1} style={{ height: 50, width: 50 }} ></Image>
          <Image source={finger2} style={{ height: 50, width: 50 }} ></Image>
          <Image source={sorprendido} style={{ height: 50, width: 50 }} ></Image>
          <Image source={love} style={{ height: 50, width: 50 }} ></Image>


        </View>

        {/* BOTONES */}
        <View style={{ width: '70%', flexDirection: 'row', marginTop: 20, borderWidth: 1, }} >

          <TouchableOpacity style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: 'red', height: 25, width: '50%', borderRadius: 15, marginTop: 10 }}>
            <Text onPress={() => setShowMangaContent(true)} style={styles.buttonText}>mangas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: 'blue', height: 25, width: '50%', borderRadius: 15, marginTop: 10 }}>
            <Text onPress={() => setShowMangaContent(false)} style={styles.buttonText}>chapters</Text>
          </TouchableOpacity>

        </View>


      </View>) : (
        <></>
      )}

    </>
  )
}
const styles = StyleSheet.create({
  buttonText: {
    color: '#66B2CE',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    alignContent: 'center',
    alignItems: 'center'
  }
})

export default ReadMangas
