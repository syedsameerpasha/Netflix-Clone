import { configureStore } from "@reduxjs/toolkit";
import  useReducer from './features/UserSlice';

export const store=configureStore({
    reducer:{
        user:useReducer,
    },
});