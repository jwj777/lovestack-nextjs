import React from "react";
import { Box, Text } from '@chakra-ui/react'

function CardBodyPySm({ children, padding }) {
  return(
    <Box pt='1' pr='8' pb='4' pl='6' width='100%'>
      { children }
    </Box>
    )
};

export default CardBodyPySm;
