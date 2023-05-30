import actions from "../actions/formManga";
import { createReducer } from "@reduxjs/toolkit";
const formManga= actions 
let initialState={
 title: '',
 category:'',
 descrption:''
}

const reducer =createReducer(
    initialState,
    builder=>builder.addCase(
        formManga,(state, action)=>{
            const newState=({ 
                ...state, 
                title:action.payload.title,
                category:action.payload.category,
                descrption:action.payload.descrption
        }
        
        )
        return newState
        }
    )
)
export default formManga