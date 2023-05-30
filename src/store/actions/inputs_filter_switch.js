 import { createAction } from "@reduxjs/toolkit";
//la accion es  un intermedia entre la vista y las operaciones de reduccion
//esa la que dispara/ejecuta la modificacion de los estados globales
const inputs_filter_switch = createAction(
'inputs_filter_switch',  //nombre de la accion
(objeto)=>{               //funcion que va a enviar datos al reductor
    console.log(objeto)                  //el objeto debe tener todas las propiedades a guardarse en el estado global //este objeto da una accion
return  {
  payload: {
    
    switches: objeto.switches,
    isNew: objeto.isNew
  }
}

                        }

)

  //la accion no tierne demasiada logica por que
  //su unico objetivo es enviar informacion al reductor
  //en el reductor se realiza toda la logia  necesaria para
  //modificar/reducir los estados globales 
  const actions =  {inputs_filter_switch}
  //construyo un objeto con la accion (mas adelante sei ran agregando mas acciones)
  export default actions
  //exporto para poder utilizarlo en los comnponentes que van a despachar los datos
  // y para configurar la logica del reductor