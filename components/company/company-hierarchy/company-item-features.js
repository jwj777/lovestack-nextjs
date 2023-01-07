import React from "react";
import { Box, Text } from '@chakra-ui/react'


function CompanyItemFeatures2({ company }) {
  return(
    <Box maxW='320px' width='100%' mt='4'>
      <Text fontWeight='700' mr={4} display='block'>Features</Text>
      <Box display='flex' flexWrap='wrap' flexDir='column'>
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