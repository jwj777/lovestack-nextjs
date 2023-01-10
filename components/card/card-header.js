import React from "react";
import { Box } from '@chakra-ui/react'

function CardHeader({ children }) {
  return(
    <Box backgroundColor='gray.50' p='4' pr='16'>
      { children }
    </Box>
    )
};

export default CardHeader;
