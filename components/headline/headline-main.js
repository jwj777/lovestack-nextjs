import React from "react";
import { Heading, Box, Text } from '@chakra-ui/react'


function HeadlineMain({ item, headlinevalue, subheadvalue }) {
  return (
    <Box>
      <Heading as='h1' mb={3} maxW='960px'>{item.attributes.headlinevalue}</Heading>
      <Text fontSize='3xl' mb={8} maxW='960px'>{item.attributes.subheadvalue}</Text>
    </Box>
  )  
}

export default HeadlineMain;
