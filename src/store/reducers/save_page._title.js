import { createReducer } from "@reduxjs/toolkit";
import inputs_actions from "../actions/save_page_title.js";
import actions from "../actions/save_page_title.js";
const {save_pages} = inputs_actions

let initial_state = {
    title: "",
    pages: ""
}

const reducer = createReducer(
    initial_state,
    (builder) => builder.addCase(
        save_pages,
        (state,action) => {
            const new_state = {
                ...state,
                title: action.payload.title,
                page: action.payload.page
            }
            return new_state
        }
    )
)
export default reducer