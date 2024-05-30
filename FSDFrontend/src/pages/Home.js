import React, { useState } from 'react'
import Encrypt from '../components/Encrypt'
import Decrypt from '../components/Decrypt'
import PasswordEncrypt from '../components/PasswordEncrypt'
import NavBar from '../components/NavBar'
import FileEncrypt from '../components/FileEncrypt'
import FileDecrypt from '../components/FileDecrypt'


const Home = () => {
  const [pEncrypt,setpEnrypt]=useState(true)
  const [tEncrypt,settEnrypt]=useState(false)
  const [tDecrypt,settDecrypt]=useState(false)
  const [fileEncrypt,setFileEncrypt]=useState(false)
  const [fileDecrypt,setFileDecrypt]=useState(false)
  return (
    <div className=''>
      <NavBar setpEnrypt={setpEnrypt} settEnrypt={settEnrypt} settDecrypt={settDecrypt} setFileEncrypt={setFileEncrypt} setFileDecrypt={setFileDecrypt}/>
      {pEncrypt && <PasswordEncrypt pEncrypt={pEncrypt}/>}
      {tEncrypt && <Encrypt tEncrypt={tEncrypt}/>}
      {tDecrypt && <Decrypt tDecrypt={tDecrypt}/>}
      {fileEncrypt && <FileEncrypt/>}
      {fileDecrypt &&<FileDecrypt/>}
    </div>
  )
}

export default Home
