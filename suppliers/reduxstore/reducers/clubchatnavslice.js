import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const navslice = createSlice({
    name:'handlenav',
    initialState,
    reducers:{
        opennav(state , action){
            state.push("opennav")
        },
        opensidebar(state){
            if(state.includes("sidebar")){
                state.splice(0)
                return
            }
            else{
                state.push("sidebar")
            }
        },
        openmember(state){
            if(state.includes("member")){
                state.splice(0)
                return 
            }
            state.push("member")
        },
        closenav(state , action){
            return state.filter((item)=>item._id != action.payload);
        }
    }
})

export const { opennav , closenav ,opensidebar ,openmember } = navslice.actions

export default navslice.reducer