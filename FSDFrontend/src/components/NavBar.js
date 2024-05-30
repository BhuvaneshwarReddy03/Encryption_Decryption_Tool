import { Navbar, Typography } from '@material-tailwind/react'
import React from 'react'
function NavList({setpEnrypt,settEnrypt,settDecrypt,setFileEncrypt,setFileDecrypt}) {
    const pClickHandler=()=>{
        setpEnrypt(true)
        settEnrypt(false)
        settDecrypt(false)
        setFileEncrypt(false)
        setFileDecrypt(false)
    }
    const tEncryptClickHandler=()=>{
        setpEnrypt(false)
        settEnrypt(true)
        settDecrypt(false)
        setFileEncrypt(false)
        setFileDecrypt(false)
    }
    const tDecryptClickHandler=()=>{
        setpEnrypt(false)
        settEnrypt(false)
        settDecrypt(true)
        setFileEncrypt(false)
        setFileDecrypt(false)
    }
    const fileEncryptHandler=()=>{
      setpEnrypt(false)
        settEnrypt(false)
        settDecrypt(false)
        setFileEncrypt(true)
        setFileDecrypt(false)
    }
    const fileDecryptHandler=()=>{
      setpEnrypt(false)
        settEnrypt(false)
        settDecrypt(false)
        setFileEncrypt(false)
        setFileDecrypt(true)
    }
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="h6"
          color="blue-gray"
          className="p-1 font-medium cursor-pointer "
          onClick={pClickHandler}
        >
            Password Encryption
        </Typography>
        <Typography
          as="li"
          variant="h6"
          color="blue-gray"
          className="p-1 font-medium cursor-pointer "
          onClick={tEncryptClickHandler}
        >
            Text Encryption
        </Typography>
        <Typography
          as="li"
          variant="h6"
          color="blue-gray"
          className="p-1 font-medium cursor-pointer"
          onClick={tDecryptClickHandler}
        >
            Text Decryption
        </Typography>
        <Typography
          as="li"
          variant="h6"
          color="blue-gray"
          className="p-1 font-medium cursor-pointer"
          onClick={fileEncryptHandler}
        >
            File Encryption
        </Typography>
        <Typography
          as="li"
          variant="h6"
          color="blue-gray"
          className="p-1 font-medium cursor-pointer"
          onClick={fileDecryptHandler}
        >
            File Decryption
        </Typography>
      </ul>
    );
  }
   
const NavBar = ({setpEnrypt,settEnrypt,settDecrypt,setFileEncrypt,setFileDecrypt}) => {
  return (
      <Navbar variant='gradient' color='cyan' className="mx-auto max-w-screen-xl px-6 py-3 mt-2"> <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          variant="h4"
          className="py-1.5"
        >
          Encryption And Decryption Tool
        </Typography>
        <div className="hidden lg:block">
          <NavList setpEnrypt={setpEnrypt} settEnrypt={settEnrypt} settDecrypt={settDecrypt} setFileEncrypt={setFileEncrypt} setFileDecrypt={setFileDecrypt}/>
        </div></div></Navbar>
  )
}

export default NavBar
