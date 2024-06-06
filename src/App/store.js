import {configureStore} from '@reduxjs/toolkit'
import userInputslice from '../compoents/userInputslice'

export const store = configureStore({
    reducer:{
        userinput:userInputslice
    }
})