import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount:0,
    rate:0,
    month:0
}

 const Userinputslice = createSlice({
     name:'userinput',
     initialState,
     reducers:{
       userInputamount:(state,action)=>{
            state.amount = action.payload
       },
       userInputrate:(state,action)=>{
        state.rate = action.payload
       },
       userInputmonth:(state,action)=>{
        state.month = action.payload
       },
     }
})

export const {userInputamount , userInputrate , userInputmonth} =  Userinputslice.actions;
//export const {userInputdata} = state => state.login
export default Userinputslice.reducer;