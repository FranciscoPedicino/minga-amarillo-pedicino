import { createAction } from "@reduxjs/toolkit";

const chapter_one=createAction(
    'chapter_one',
    (objeto)=>{
        return{
     payload:{
       data:objeto
}
    }}
)
const actions ={chapter_one}
export default actions