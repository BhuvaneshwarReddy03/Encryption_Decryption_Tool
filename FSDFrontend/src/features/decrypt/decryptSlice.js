import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initialState={
    data:null,
    loading:false,
    error:null
}
export const getDecrypt=createAsyncThunk(
    'decrypt/getDecrypt',async(text,thunkAPI)=>{
        try{
            const res=await axios.post("http://localhost:8086/getDecrypt",text)
            return res.data
        }
        catch(error)
        {
            return thunkAPI.rejectWithValue(error.response.data)
        }
        
    }
)
const decryptSlice=createSlice({
    name:"decrypt",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getDecrypt.pending,state=>{
            state.loading=true
            state.data=null
            state.error=null
        })
        .addCase(getDecrypt.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.error=null
        })
        .addCase(getDecrypt.rejected,(state,action)=>{
            state.loading=false
            state.data=null
            state.error=action.payload
        })
    }
})
export default decryptSlice.reducer;