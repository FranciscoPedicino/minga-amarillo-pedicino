import { createAction } from "@reduxjs/toolkit";
const inputs_filter=createAction(
    'inputs_filter',
    (object)=>{
        return {
            payload:{
                title2:object.title2,
                categories2:object.categories2,
                
                
            }
        }
    }
)
const actions = {inputs_filter}
export default actions