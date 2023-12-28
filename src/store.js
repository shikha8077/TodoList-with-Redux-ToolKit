import {configureStore} from "@reduxjs/toolkit"
import  todoReducers from "../src/reducers/todos/todoSlice"


export const store = configureStore({
    reducer:todoReducers,
})