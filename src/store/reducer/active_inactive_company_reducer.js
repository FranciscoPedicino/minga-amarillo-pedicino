import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/active_inactive_company";
const { read_active_inactive_company, upd_company } = actions;
let initialState = {
  inactive_active_company: [],
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(
      read_active_inactive_company.fulfilled, //asincrona siermpre fullfiled cuando la promesa se cumple
      (state, action) => {
        let {activeCompany , inactiveCompany} = action.payload.inactive_active_company
        let newState = {
          ...state,
          inactive_active_company: [...activeCompany, ...inactiveCompany]
        };

        return newState;
      }
    )
    .addCase(upd_company.fulfilled, (state, action) => {
      let newState = {
        ...state,
        inactive_active_company: state.inactive_active_company.map((each) => {
          if (each._id === action.payload.data._id) {
            return action.payload.data;
          } else {
            return each;
          }
        }),
      };
      return newState;
    })
);

export default reducer;

//estado para guardar las activas e inactivas
//por que cuando se elimine una se tiene que quitar del estado global para renderizart
//porque cuando modifique una categoria, se tiene que modificar de ese estado global para poder renderizar la categoria modificada
//haciendo una unica peticion de tipo put no voyu a necesitar una nueva peticion de tipo get para ver las actualizaciones de las categorias
//haciendo una unica peticion de tipo delete no voy a necesitar uan nueva peticion de tipo get para ver las categorias sin la borrada
