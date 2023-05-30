import { createAction } from "@reduxjs/toolkit";

const save_pages = createAction(
    'save_pages',
    (object)=>{
        return {
            payload: {
                title: object.title,
                page: object.page
            }
        }
    }
)

const actions = {save_pages}
export default actions