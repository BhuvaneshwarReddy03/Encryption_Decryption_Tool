import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDecrypt } from '../features/decrypt/decryptSlice'
import { useSelector } from 'react-redux'
import { Button, Card, Input, Typography } from '@material-tailwind/react'

const Decrypt= ({tDecrypt}) => {
    const [name,setName]=useState("")
    const dispatch=useDispatch()
    
    const data=useSelector(state=>state.decrypt.data);
    const error=useSelector(state=>state.decrypt.error);
    const [errors,setErrors]=useState(null)
    const [decrypt,setDecrypt]=useState(null)
    const handleChange=(e)=>{
        setName(e.target.value)
        setDecrypt(null)
        setErrors(null)
    }
    
    useEffect(()=>{
      setErrors(error);
    },[error])
    useEffect(()=>{
      setDecrypt(data);
    },[data])
    useEffect(()=>{
      setDecrypt(null)
      setErrors(null)
    },[tDecrypt])
    const text={name}
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(getDecrypt(text))
    }
  return (
    <div>
      
    <Card className='flex flex-col items-center w-1/2 mx-auto h-96 mt-4 p-4'>
    <Typography variant='h4'className='bg-black w-72 rounded-lg mx-auto' color={'white'}>Text Decryption</Typography>
      <form onSubmit={handleSubmit} className='flex flex-col  items-center w-full mt-4 gap-y-2'>
        <Input label="Enter The Text To Decrypt" type='text' className='w-full' onChange={handleChange} value={name}></Input>
        <Button color='success' variant='contained' type='submit' className='w-fit'>submit</Button>
        {decrypt && <><Typography variant='h5' >
        Decrypted Text is</Typography><Typography className='break-all'>{decrypt}</Typography></>}
        {errors && <Typography>{errors}</Typography>}
      </form>
    </Card>
    </div>
  )
}

export default Decrypt
