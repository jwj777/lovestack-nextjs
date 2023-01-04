import React from "react";
import { Box, Text } from '@chakra-ui/react'
import StackItem from "./stack-item";

function StackCategory({ stacks, stackCategory, background, flexDir }) {
  return (
      <Box 
        backgroundColor={background} 
        flex='2'
        p={{ base: '2', md: '6' }} 
        pr={{ base: '6', md: '16' }} 
        pl={{ base: '4', md: '8' }} 
        mr={{ base: '0', md: '8' }} 
        mb='8' 
        borderRadius='lg'
      >
        <Text fontSize='1.06rem' fontWeight='500' mt='2' mb='4' textTransform='uppercase' letterSpacing='1.2px'>{stackCategory}</Text>
          <Box display='flex' flexWrap='wrap' flexDir={flexDir}>
          {
            stacks[0].attributes.stackItem.map((item, index) => {
              return(
              item.Category == stackCategory ?
                <StackItem company={item.companyRef.data.attributes} /> :
                ''
              )
    
            })
          }
          </Box>
      </Box>
  )
}

export default StackCategory;