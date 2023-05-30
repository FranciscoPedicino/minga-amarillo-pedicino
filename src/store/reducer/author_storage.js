import author from "../actions/authors_storage"
import { createReducer } from "@reduxjs/toolkit";
const { authors_storage } = author;
let initial_state = {
    storage: [],
  };

  const reducer = createReducer(
    initial_state,
    (builder)=>  builder
    .addCase (
        authors_storage,
        (state,action)=>{
            const new_state = {
                ...state,
                storage:action.payload.storage
            }
            return new_state
        }
        )
    
    )
    export default reducer