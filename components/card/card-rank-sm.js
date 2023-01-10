import React from "react";
import { Text, Box } from '@chakra-ui/react'

function CardRankSm({ rank }) {
  return (
    <Box 
      display='flex' 
      justifyContent='flex-start'
      fontSize='md' 
      width='min-content'
    >
      <Text alignSelf='flex-start' color='gray.600' fontSize='sm' mr='1'>stackRank:</Text> 
      { rank ?
          <Text alignSelf='flex-start' color='blue.400' fontSize='sm' fontWeight='600'>{rank.toFixed(2)}</Text> :
        null
      }
    </Box>
  )
}

export default CardRankSm;