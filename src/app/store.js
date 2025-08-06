import dftexpreducer from '../features/user/userSlice.js';
import { configureStore } from '@reduxjs/toolkit'; 
const store = configureStore(
    {
        reducer:
        {
            user: dftexpreducer,
        },});
export default store;