import { createAction } from "@reduxjs/toolkit";
const authors_storage = createAction(
'authors_storage',
(objeto)=>{
    console.log(objeto)
    return{
        payload:{
            storage: objeto.storage
        }
    }
}
)
const actions =  {authors_storage}
export default actions