import { createReducer } from "@reduxjs/toolkit";
//importo las acciones
import chapter_action from "../actions/chapter_one";

//desestructuro la accion para poder utilizarla
const {chapter_one} = chapter_action

//defino estado inicial
let initial_state = {
  chapters:[]
}

const reducer = createReducer (
  initial_state,
  (builder) => builder
  .addCase(
    chapter_one,
    (state, action) => {
      const new_state = {
        ...state, 
        chapters: action.payload.data,
      }
      return new_state
    }
  )
)

export default reducer