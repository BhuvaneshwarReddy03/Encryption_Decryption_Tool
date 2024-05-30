import { Button, Card, Input, Typography } from '@material-tailwind/react'
import React, {  useState } from 'react'
import { useDispatch} from 'react-redux'
import { getFileEncrypt } from '../features/fileencrypt/fileEncryptSlice'

const FileEncrypt = () => {
    const [file,setFile]=useState(null)
    const onFileChange=(e)=>{
        setFile(e.target.files[0])
    }
    const formData = new FormData();
    formData.append('file', file);
    const dispatch=useDispatch()
    const fileSubmit=async(e)=>{
        e.preventDefault();

        try{
            const res=await dispatch(getFileEncrypt(formData)).unwrap()
            const url = window.URL.createObjectURL(new Blob([res]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `encrypted_${file.name}`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        }
        catch(error)
        {
            
        }
    }
  return (
    <div>
        <Card className='flex flex-col  items-center w-1/2 mx-auto h-96 mt-4 p-4  rounded-lg'>
        <Typography variant='h4'className='bg-black w-72 rounded-lg mx-auto' color={'white'}>File Data Encryption</Typography>
            <form onSubmit={fileSubmit} className='flex flex-col  items-center w-full mt-4 gap-y-2'> 
                <Input type='file' onChange={onFileChange} label='Upload The File To Encrypt'></Input>
                <Button type='submit'>Encrypt And Download The File</Button>
            </form>
        </Card>
           
      
    </div>
  )
}

export default FileEncrypt
