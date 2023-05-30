import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";
import Swal from 'sweetalert2'


const manga_read=createAsyncThunk('manga_read',async()=>{
    
try {
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    let res=await axios(apiUrl+'mangas/me',headers)
   
    return {mangas:res.data.response}

} catch (error) {
    return {
        mangas:[]
    }
    
}

})
  const manga_delete=createAsyncThunk('manga_delete',async({id})=>{
    try {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let res=await axios.delete(apiUrl+'mangas/'+ id,headers)
       
        return {
            delete:id,
            
        }


    } catch (error) {
        return {
            mangas:[]
        }
    }
})  

const manga_update=createAsyncThunk('manga_update',async({id,data})=>{
    try {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let res=await axios.put(apiUrl+'mangas/'+ id,data,headers)
        return {
            data:res.data.manga
        }


    } catch (error) {
    
        Swal.fire({
        icon:'error',
        title: error.response.data.message
        
        })
     
    }
}) 
const actions={manga_read,manga_delete,manga_update}
export default actions