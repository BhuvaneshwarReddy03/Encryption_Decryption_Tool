import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initialState={
    data:null,
    loading:false,
    error:null
}
export const getEncrypt=createAsyncThunk(
    'encrypt/getEncrypt',async(text,thunkAPI)=>{
        try{
            const res=await axios.post("http://localhost:8086/getEncrypt",text)
            return res.data
        }
        catch(error)
        {
            return thunkAPI.rejectWithValue(error.response.data)
        }
        
    }
)
const encryptSlice=createSlice({
    name:"encrypt",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getEncrypt.pending,state=>{
            state.loading=true
            state.data=null
            state.error=null
        })
        .addCase(getEncrypt.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.error=null
        })
        .addCase(getEncrypt.rejected,(state,action)=>{
            state.loading=false
            state.data=null
            state.error=action.payload
        })
    }
})
export default encryptSlice.reducer;