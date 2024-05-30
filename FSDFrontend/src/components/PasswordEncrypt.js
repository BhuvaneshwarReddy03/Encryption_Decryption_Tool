import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Button, Card, Input, Typography } from '@material-tailwind/react'
import { getPasswordEncrypt } from '../features/passwordEncrypt/passwordEncryptSlice'

const PasswordEncrypt= ({pEncrypt}) => {
    const [name,setName]=useState("")
    const dispatch=useDispatch()
    
    const data=useSelector(state=>state.passwordEncrypt.data);
    const error=useSelector(state=>state.passwordEncrypt.error);
    const [errors,setErrors]=useState(null)
    const [passwordEncrypt,setPasswordEncrypt]=useState(null)
    const handleChange=(e)=>{
        setName(e.target.value)
        setPasswordEncrypt(null)
        setErrors(null)
    }
    useEffect(()=>{
      setErrors(error);
    },[error])
    useEffect(()=>{
        setPasswordEncrypt(data);
    },[data])
    useEffect(()=>{
      setPasswordEncrypt(null)
      setErrors(null)
    },[pEncrypt])
    const text={name}
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(getPasswordEncrypt(text))
    }
    console.log(passwordEncrypt)
  return (
    <div>
      
    <Card className='flex flex-col items-center w-1/2 mx-auto h-96 mt-4 p-4'>
    <Typography variant='h4'className='bg-black w-72 rounded-lg mx-auto' color={'white'}>Password Encryption</Typography>
      <form onSubmit={handleSubmit} className='flex flex-col  items-center w-full mt-4 gap-y-2'>
        <Input label="Enter The Password To Encrypt" type='text' className='w-full' onChange={handleChange} value={name}></Input>
        <Button color='success' variant='contained' type='submit' className='w-fit'>submit</Button>
        {passwordEncrypt && <><Typography variant='h5' >
        Encrypted Password Is</Typography><Typography className='break-all'>{passwordEncrypt}</Typography></>}
        {errors && <Typography>{errors}</Typography>}
      </form>
    </Card>
    </div>
  )
}

export default PasswordEncrypt
