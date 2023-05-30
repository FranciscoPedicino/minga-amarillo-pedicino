import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from 'axios'

const read_comments  = createAsyncThunk('read_comments', async({id})=>{ //accion para editar los comentarios
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
       
       let res= await axios(apiUrl + `comments?chapter_id=${id}`, headers)
      
       return{
        comments: res.data.response
       }
    } catch (error) {
       
        return{
            comments:[]
        }
    }
})
const delete_comment= createAsyncThunk('delete_comment', async({id})=>{ //accion para borrar comentarios
    try {
        let token = localStorage.getItem("token");
        let headers = { headers: { Authorization: `Bearer ${token}` } }; 
        let res = await axios.delete(apiUrl+ "comments/"+ id, headers )
        console.log(res)
        return {
            removeId:id
        }
    } catch (error) {
        return {
            comments:[]
        }
    }
})

const upd_comment= createAsyncThunk('upd_comment', async({id, comment})=>{  //accion para actualizar los comentarios
    try {
        let token = localStorage.getItem("token");
        let headers = { headers: { Authorization: `Bearer ${token}` } }; 
        let response = await axios.put(apiUrl+'comments/'+id, comment, headers)


        console.log(response)
        return {
         data:response.data.response
        }
    } catch (error) {
        console.log(error)
        return{
            comments:[]
        }
    }

})
const actions = {read_comments, delete_comment, upd_comment}
export default actions