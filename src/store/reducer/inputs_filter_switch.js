import { createReducer } from "@reduxjs/toolkit";
//importo las acciones
import inputs_actions from "../actions/inputs_filter_switch";
//desestructuro las acciones que nesecito configurar
const { inputs_filter_switch } = inputs_actions;
//defino estado inicial
let initial_state = {
    switches: [],
    isNew: true,
 
  };
const reducer = createReducer(
initial_state,  //estado inicial
(builder)=>  builder   //funcion constructora de casos
.addCase (             //cada caso indica un cambio de estado  
    inputs_filter_switch, //nombre de la accion que tiene la informacion a reducir
    (state,action)=>{     //funcion quer depende del estado y la accion y la encargada de manejar la logica de reduccion
       const new_state = {
        
        switches:action.payload.switches,
       isNew:!action.payload.isNew
    }
   
    return new_state
    }
    )

)

export default reducer