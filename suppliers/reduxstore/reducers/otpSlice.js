import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email:"",
    result:"",
    otp:""
}
const url = `https://gamynt-backend.onrender.com`
const otpSlice = createSlice({
    initialState,
    name:"otp",
    reducers:{
        send_OTP(state,action){
            state = action.payload
            fetch(`${url}/otp?email=${action.payload.email}`).then((e)=>{
                // console.log(e.json())
                // state.result = true
            }).then((e)=>{
                // console.log(e)
            })
            // console.log({state,action}) 
        },
        VERIFY_OTP(state,action){
            state = action.payload
            fetch(`${url}/otp-verify?email=${action.payload.email}&otp=${action.payload.otp}`).then((e)=>{
                // console.log(e)
            }).then((e)=>{
            })
            // console.log({state,action}) 
            return state
        }
    }
})

export const { send_OTP,VERIFY_OTP } = otpSlice.actions

export default otpSlice.reducer