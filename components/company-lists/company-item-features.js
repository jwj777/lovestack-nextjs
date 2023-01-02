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
      mb={{ base: '6', md: '0' }}
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
    >
    <Text fontWeight='600' mr='4' display='block' mb={{ base: '2', md: '2' }}>Features:</Text>
    {/* <Box display='flex' flexWrap='wrap' flexDir='column' maxH={{ base: 'auto', md: '6rem' }}> */}
    <Box className='companyItemFeatures'>
      {company.featureNameArray.map((item, index) => {
        return ( 
        <Text key={index} fontSize={{ base: 'sm', md: 'md' }} fontWeight='500' mr={{ base: '0', md: '8' }} mb='2' ml='4'>
          <Icon as={FaCaretRight} w={4} h={4} mr='0' pt='1' ml='-4'></Icon>
          {item}
        </Text>
        )
      })}
    </Box>
  </Box>
  )
}

export default CompanyItemFeatures;