import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";

const getData = createAsyncThunk('getData', async({manga_id}) => {

    
    try {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }

        let get = await axios.get(apiUrl + `chapters/me?manga_id=` + manga_id, headers)
        // console.log(get.data.chapter);
        
        return {
            
            chapter: get.data.chapter,
            title: get.data.chapter[0]?.manga_id.title

        }
    } catch (error) {
        
        return {
            chapter: [],
            title: ""
        } 
    }
})
const getInfo = createAsyncThunk(
    'getInfo',
    async ({ order, chapter }) => {
        try {
            return {
                order,
                chapter
            }
        } catch (error) {
            return {
                order: null,
                chapter: {}
            }
        }
    }
)

const delete_chapter = createAsyncThunk('delete_chapter', async({id, manga_id})=> {
    try {
        let token = localStorage.getItem('token')
        let configs = { headers: { 'Authorization': `Bearer ${token}` },
                        data: {manga_id}
    }

        console.log('hola');    
        let res = await axios.delete(apiUrl + 'chapters/' + id,   configs )  
        return {
            delete : id
        }
    } catch (error) {
        return {
            delete : []
        }
    }
})

const upd_chapter = createAsyncThunk('upd_chapter', async(data) => {
  try {
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } } 
    // let body = {manga_id:data.manga_id,}
    let res = await axios.put(apiUrl + 'chapters/' + data.id ,data ,headers  )
    console.log(res);
     
    return {
        data: res.data.update
    }
  } catch (error) {
    return{
        update: []
    }
  }
})

const actions = {getData, getInfo, delete_chapter, upd_chapter}

export default actions

