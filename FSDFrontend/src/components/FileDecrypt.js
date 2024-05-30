import { Button, Card, Input, Typography } from '@material-tailwind/react'
import React, {  useState } from 'react'
import { useDispatch} from 'react-redux'
import { getFileDecrypt } from '../features/filedecrypt/fileDecryptSlice'

const FileDecrypt = () => {
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
            console.log(formData)
            const res=await dispatch(getFileDecrypt(formData)).unwrap()
            const url = window.URL.createObjectURL(new Blob([res]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `decrypted_${file.name}`);
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
        <Typography variant='h4'className='bg-black w-72 rounded-lg mx-auto' color={'white'}>File Data Decryption</Typography>
            <form onSubmit={fileSubmit} className='flex flex-col  items-center w-full mt-4 gap-y-2'> 
                <Input type='file' onChange={onFileChange} label='Upload The File To Decrypt'></Input>
                <Button type='submit'>Decrypt And Download The File</Button>
            </form>
        </Card>
           
      
    </div>
  )
}

export default FileDecrypt
