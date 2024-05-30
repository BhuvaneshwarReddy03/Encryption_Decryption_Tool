import { configureStore } from "@reduxjs/toolkit";
import decryptSlice from "../features/decrypt/decryptSlice";
import passwordEncryptSlice from "../features/passwordEncrypt/passwordEncryptSlice";
import encryptSlice from "../features/encrypt/encryptSlice";
import fileEncryptSlice from "../features/fileencrypt/fileEncryptSlice";
import fileDecryptSlice from "../features/filedecrypt/fileDecryptSlice";
export const store=configureStore({
    reducer:{
        encrypt:encryptSlice,
        decrypt:decryptSlice,
        passwordEncrypt:passwordEncryptSlice,
        fileEncrypt:fileEncryptSlice,
        fileDecrypt:fileDecryptSlice
    }
})