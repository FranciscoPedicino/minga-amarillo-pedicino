import { createReducer } from "@reduxjs/toolkit";
import inputs_actions from '../actions/inputs_filter'
const {inputs_filter}= inputs_actions 
let initial_state={
    title2:'',
    categories2:[]

}
const reducer = createReducer(
    initial_state, 
    (builder)=> builder
    .addCase(
     inputs_filter,
     (state, action )=>{
      const newState={
       ...state, 
       title2: action.payload.title2,
       categories2: action.payload.categories2,
       
       

              }
              return newState
          }
        
      )
  )
  export default reducer