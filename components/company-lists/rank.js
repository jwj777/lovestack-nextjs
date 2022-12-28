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
      { rank ?
          <Text alignSelf='flex-start' color='blue.500' fontWeight='600'>{rank.toFixed(2)}</Text> :
        null
      }
    </Box>
  )
}

export default Rank;