import React from "react";
import { Box } from '@chakra-ui/react'

function CardHeaderOutline({ children, bg }) {
  return(
    <Box pt='5' pb='4' pl='6' background='blue.10' borderBottom='1px' borderColor='gray.100' flex='1'>
      { children }
    </Box>
    )
};

export default CardHeaderOutline;
