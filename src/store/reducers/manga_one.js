import { createReducer } from "@reduxjs/toolkit";
//importo las acciones
import manga_action from "../actions/manga_one";

//desestructuro la accion para poder utilizarla
const {manga_one} = manga_action

//defino estado inicial
let initial_state = {
  title: '',
  cover_photo: '',
  description:'',
}

const reducer = createReducer (
  initial_state,
  (builder) => builder
  .addCase(
    manga_one,
    (state, action) => {
      const new_state = {
        ...state, 
        title: action.payload.title,
        cover_photo: action.payload.cover_photo,
        description:action.payload.description
      }
      return new_state
    }
  )
)

export default reducer