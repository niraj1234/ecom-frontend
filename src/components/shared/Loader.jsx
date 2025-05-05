import React from 'react'
import { Box, CircularProgress } from '@mui/material';

const Loader = ({text}) => {
  return (
    <div  className='flex justify-center items-center w-full h-[400px] flex-col gap-1 '>
        <p>{text ? text : "Please wait ..."}</p>
        <Box sx={{ display: 'flex' }}>
            <CircularProgress color="secondary" />
        </Box>      
    </div>
  )
}

export default Loader
