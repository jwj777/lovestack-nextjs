import React from "react";
import { Box, Text, Icon } from '@chakra-ui/react'
import { FaCaretRight } from "react-icons/fa";

function CompanyItemFeatures({ company }) {
  return(
    <Box 
      display='flex'
      flexDir={{ base: 'column', md: 'row' }}
      maxW='4xl' width='100%' 
      mr={{ base: '0', md: '4rem'}} 
      mb={{ base: '4', md: '0' }}
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
    >
    <Text fontWeight='600' mr='4' mb={{ base: '2', md: '0' }}  display='block'>Features:</Text>
    <Box display='flex' flexWrap='wrap' flexDir='column' maxH={{ base: 'auto', md: '6rem' }}>
      {company.featureNameArray.map((item, index) => {
        <Box key={index + '__' + company.companyName}>
          <Text fontSize='md' mr='5' mb='1'>
            <Icon as={FaCaretRight} w={4} h={4} mr='0' pt='1'></Icon>
            {item}
          </Text>
        </Box>
      })}
    </Box>
  </Box>
  )
}

export default CompanyItemFeatures;