import React from "react";
import { Box } from '@chakra-ui/react'

function CardBody({ children }) {
  return(
    <Box p='4' pl='6' pr='16'       width='100%'>
      { children }
    </Box>
    )
};

export default CardBody;
