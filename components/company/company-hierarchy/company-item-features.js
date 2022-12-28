import React from "react";
import { Box, Text } from '@chakra-ui/react'


function CompanyItemFeatures2({ company }) {
  return(
    <Box display='flex' maxW='4xl' width='100%' mr={{ base: '0', md: '4rem'}} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
      <Text fontWeight='700' mr={4} display='block'>Features</Text>
      <Box display='flex' flexWrap='wrap'>
        {company.features.data.map((item, index) => {
          return ( 
          <Text key={index} fontSize='md' mr={4} mb={1}>{item.attributes.featureName}</Text>
          )
        })}
      </Box>
  </Box>
  )
}

export default CompanyItemFeatures2;