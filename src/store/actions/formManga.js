import { createAction } from "@reduxjs/toolkit";

let formManga = createAction('formManga',(obj)=>
{
return {
    payload:{
        title:obj.title,
        category:obj.category,
        description:obj.description
    }
}
})
const actions = {formManga}
export default actions