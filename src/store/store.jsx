
import { configureStore } from "@reduxjs/toolkit";
import input_reducer from "./reducer/inputs_filter_switch"
import storage_reducer from "./reducer/author_storage"
import inputs_reducer_chapter from "./reducers/save_page._title"
import inputs_reducer_mangas from "./reducers/inputs_filter";
import manga_reducer from './reducers/manga_one.js'
import chapter_reducer from './reducers/chapter_one.js'

import chapter_edit from './reducers/edith_chapter.js'
import active_inactive_reducer from "./reducer/active_inactive_reducer"
import state_admin_button from "./reducer/state_admin_reducer"
import active_inactive_companie_reducer from "./reducer/active_inactive_company_reducer"
import comment_reducer from './reducers/comments.js'
import category_reducer from './reducers/categories'
import reducer_mangas from './reducers/manga'



const store = configureStore({
  
        reducer:{


        inputs: input_reducer,
        almacenamiento: storage_reducer,
        inputsChapter: inputs_reducer_chapter,

        inputsMangas:inputs_reducer_mangas,
        chapter:chapter_reducer,
        manga:manga_reducer,
        activeOrInactive:active_inactive_reducer,
        activeOrInactiveCompanies:active_inactive_companie_reducer,
        stateButton: state_admin_button,
 chapters: chapter_edit,

categories:category_reducer,

    comment:comment_reducer,
          mangas:reducer_mangas,

     
       


      }
})

    export default store 


