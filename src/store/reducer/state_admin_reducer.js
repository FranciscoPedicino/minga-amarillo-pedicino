import { createReducer } from "@reduxjs/toolkit";
//importo las acciones
import  admin_button from "../actions/state_admin_panel";
//desestructuro las acciones que nesecito configurar
const { state_admin_button } = admin_button;
//defino estado inicial
let initial_state = {
    button: "",
 
 
  };
const reducer = createReducer(
initial_state,  //estado inicial
(builder)=>  builder   //funcion constructora de casos
.addCase (             //cada caso indica un cambio de estado  
state_admin_button, //nombre de la accion que tiene la informacion a reducir
    (state,action)=>{     //funcion quer depende del estado y la accion y la encargada de manejar la logica de reduccion
       const new_state = {
        ...state,
        button:action.payload.button,
    
    }
   
    return new_state
    }
    )

)

export default reducer