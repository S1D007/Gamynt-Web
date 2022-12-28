import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const navslice = createSlice({
    name:'handlenav',
    initialState,
    reducers:{
        opennav(state , action){
            console.log(action)
            console.log(action.payload)
            state.push("sidebar")
        },
        opensidebar(state){
            // state.push("sidebar")
            if(state.includes("sidebar")){
                state.splice(0)
                return
            }
            else{
                console.log("initialState",initialState)
                state.push("sidebar")
            }
        },
        openmember(state){
            // state.push("member")
            if(state.includes("member")){
                state.splice(0)
                return 
            }
            state.push("member")
        },
        closenav(state , action){
            console.log("on remove me")
            // state.pop()
            return state.filter((item)=>item._id != action.payload);
        }
    }
})

export const { opennav , closenav ,opensidebar ,openmember } = navslice.actions

export default navslice.reducer