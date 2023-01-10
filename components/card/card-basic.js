import React from "react";
import { Box } from '@chakra-ui/react'


function CardBasic({ children, heading }) {
  return(
    <Box 
      className='cardContainer'
      width={{ base: '100%', md: 'auto' }} 
      minW='280px'
      height='100%'
      sx={{
        display: 'block',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        borderRadius: '0.5rem',
        '*:hover > &': {
          boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        },
      }}

    >
      { children }
    </Box>
    )
};

export default CardBasic;
