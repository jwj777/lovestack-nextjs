import React from "react";
import { Box } from '@chakra-ui/react'


function CardOutline({ children }) {
  return(
    <Box 
      width={{ base: '100%', md: 'auto' }} 
      minW='280px'
      height='100%'
      border='1px'
      borderColor='blue.100'
      sx={{
        display: 'block',
        borderRadius: '0.5rem',
      }}

    >
      { children }
    </Box>
    )
};

export default CardOutline;