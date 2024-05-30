import { createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initialState={
    data:null,
    loading:false,
    error:null
}
export const getPasswordEncrypt=createAsyncThunk(
    "passwordEncrypt/getPasswordEncrypt",async(text,thunkAPI)=>{
        try{
            const res=await axios.post("http://localhost:8086/getPasswordEncrypt",text)
            return res.data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
const passwordEncryptSlice=createSlice({
    name:"passwordEncrypt",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getPasswordEncrypt.pending,state=>{
            state.loading=true
            state.data=null
            state.error=null
        })
        .addCase(getPasswordEncrypt.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.error=null
        })
        .addCase(getPasswordEncrypt.rejected,(state,action)=>{
            state.loading=false
            state.data=null
            state.error=action.payload
        })
    }
})
export default passwordEncryptSlice.reducer;