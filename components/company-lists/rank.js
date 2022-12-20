import React from "react";
import { Text, Box } from '@chakra-ui/react'

function Rank({ rank }) {
  return (
    <Box 
      display='flex' 
      justifyContent='flex-start'
      fontSize='md' 
      color='white'
      width='min-content'
    >
      <Text alignSelf='flex-start' color='black' mr='1' fontWeight='500'>stackRank:</Text> 
      <Text alignSelf='flex-start' color='blue.400' fontWeight='600'>{rank}</Text>
    </Box>
  )
}

export default Rank;