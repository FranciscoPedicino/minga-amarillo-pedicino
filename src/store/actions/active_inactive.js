import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";
const read_active_inactive = createAsyncThunk('read_active_inactive', async()=>{
  try {
      let token = localStorage.getItem('token')
      let headers = { headers: { 'Authorization': `Bearer ${token}` } }
      let res = await axios(apiUrl +'authors/admin',headers)
      console.log(res.data)
      return {
        inactive_active:res.data
      }
    } catch (error) {
        return{
            inactive_active:[]
        }
    }

})


const upd_author = createAsyncThunk('upd_author', async ({id,data})=>{
//tiene que modificar el rol de la base de datos 
//luego modifica el array del estado global de author para que el array tenga la actualizacion sin tener que hacer otra peticion tipo get
try {
  let token = localStorage.getItem('token')
  let headers = { headers: { 'Authorization': `Bearer ${token}` } }
 let response = await axios.put(apiUrl+'auth/role/author/'+id,data,headers)
 console.log(data)
 console.log(response)
 return{
   data:response.data.newAuthor
  }
} catch (error) {
  console.log(error);
  return {
    inactive_active:[]
  }
}

})


const actions = {read_active_inactive,upd_author}
export default actions 