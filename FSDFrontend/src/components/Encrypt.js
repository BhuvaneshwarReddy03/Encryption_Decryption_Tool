import React, { useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEncrypt } from '../features/encrypt/encryptSlice'
import { Button, Card, Input, Typography } from '@material-tailwind/react'

const Encrypt = ({tEncrypt}) => {
    const [name,setName]=useState("")
    const dispatch=useDispatch()
    const data=useSelector(state=>state.encrypt.data);
    const error=useSelector(state=>state.encrypt.error);
    const [errors,setErrors]=useState(null)
    const [encrypt,setEncrypt]=useState(null)
    const handleChange=(e)=>{
        setName(e.target.value)
        setEncrypt(null)
        setErrors(null)
        
    }
    useEffect(()=>{
      setEncrypt(data);
    },[data])
    useEffect(()=>{
      setErrors(error);
    },[error])
    useEffect(()=>{
      setEncrypt(null)
      setErrors(null)
    },[tEncrypt])
    const text={name}
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(getEncrypt(text))
    }
  return (
    <div>
    <Card className='flex flex-col  items-center w-1/2 mx-auto h-96 mt-4 p-4  rounded-lg'>
    <Typography variant='h4'className='bg-black w-72 rounded-lg mx-auto' color={'white'}>Text Encryption</Typography>
      <form onSubmit={handleSubmit} className='flex flex-col  items-center w-full mt-4 gap-y-2'>
        <Input label="Enter The Text To Encrypt" type='text' className='w-full' onChange={handleChange} value={name}></Input>
        <Button color='success' variant='contained' type='submit' className='w-fit'>submit</Button>
        
        {encrypt && <><Typography variant='h5' >
        Encrypted Text is</Typography><Typography className='break-all'>{encrypt}</Typography></>}
        {errors && <Typography>{errors}</Typography>}
      </form>
    </Card>
    </div>
  )
}

export default Encrypt
