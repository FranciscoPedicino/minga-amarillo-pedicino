import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/comments";

const {read_comments, delete_comment, upd_comment}= actions

let initialState={
    comments:[]
}

const reducer = createReducer(
initialState,
builder=>
    builder
    .addCase(
          read_comments.fulfilled,
          (state,action)=>{
            let newState={
                ...state,
                comments:action.payload.comments
            }
            return newState
          }
    )
    .addCase(
        delete_comment.fulfilled,
        (state, action)=>{
            let newState={
                ...state,
                comments:state.comments.filter(each=>each._id!==action.payload.removeId)
            }
            return newState
        }
    )
    .addCase(
        upd_comment.fulfilled,
        (state,action)=>{
            let newState={
                ...state,
                commments:state.comments.map(each=>{

                    if(each===action.payload.data ){

                        return action.payload.data
                    }else{
                        return each
                    }
                })
            }
            return newState
        }
    )

)
export default reducer