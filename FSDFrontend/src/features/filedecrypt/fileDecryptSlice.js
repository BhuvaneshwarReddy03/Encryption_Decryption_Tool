import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    data:null,
    loading:false,
    error:null
}
export const getFileDecrypt=createAsyncThunk(
    'fileDecrypt/getFileDecrypt',async(fomData,thunkAPI)=>{
        try{
            const res=await axios.post("http://localhost:8085/getFileDecrypt",fomData);
            return res.data
        } 
        catch(error){
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
const fileDecryptSlice=createSlice({
    name:'fileDecrypt',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getFileDecrypt.pending,state=>{
            state.loading=true
            state.data=null
            state.error=null
        })
        .addCase(getFileDecrypt.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.error=null
        })
        .addCase(getFileDecrypt.rejected,(state,action)=>{
            state.loading=false
            state.data=null
            state.error=action.payload
        })
    }
})
export default fileDecryptSlice.reducer