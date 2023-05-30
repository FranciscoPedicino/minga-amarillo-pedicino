import { createAction } from "@reduxjs/toolkit";
const state_admin_button = createAction(
'state_admin_button',
(objeto)=>{
    console.log(objeto)
    return{
        payload:{
            button: objeto.button
        }
    }
}
)
const actions =  {state_admin_button}
export default actions