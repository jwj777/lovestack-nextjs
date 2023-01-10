import React from "react";
import { Box, Text } from '@chakra-ui/react'

function CardBody({ children, padding }) {
  return(
    <Box pt={ padding == '4' ? '1' : '5' } pr='8' pb={ padding == '4' ? '4' : '8' } pl='6' width='100%'>
      <Text>{padding}</Text>
      { children }
    </Box>
    )
};

export default CardBody;
