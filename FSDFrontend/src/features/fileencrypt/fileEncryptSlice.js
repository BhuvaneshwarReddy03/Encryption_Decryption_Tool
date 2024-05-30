import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    data:null,
    loading:false,
    error:null
}
export const getFileEncrypt=createAsyncThunk(
    'fileEncrypt/getFileEncrypt',async(fomData,thunkAPI)=>{
        try{
            const res=await axios.post("http://localhost:8084/getFileEncrypt",fomData);
            return res.data
        } 
        catch(error){
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
const fileEncryptSlice=createSlice({
    name:'fileEncrypt',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getFileEncrypt.pending,state=>{
            state.loading=true
            state.data=null
            state.error=null
        })
        .addCase(getFileEncrypt.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.error=null
        })
        .addCase(getFileEncrypt.rejected,(state,action)=>{
            state.loading=false
            state.data=null
            state.error=action.payload
        })
    }
})
export default fileEncryptSlice.reducer