import React from "react";
import { Heading, Image, Text, Box } from '@chakra-ui/react'

const CompanyHeading = ({ company }) => {
  return (

    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="flex-start" 
      flexWrap={{ base: 'wrap', lg: 'nowrap' }}
      mt='16'
      mb='8'
    >
      { company.webScreenshot.data != null ?
          <Image
            width={{ base: '100%', lg: '200px' }}
            alt={company.companyName + ' Website Homepage'}
            src={ company.webScreenshot.data[0].attributes.url }
            mb={{ base: '1rem', lg: '0' }}
          /> :
        null 
      }
      <Box ml={{ base: '0', lg: '2rem' }}>
        <Heading as='h1' fontSize={{ base: '4xl', lg: '5xl' }}>{company.companyName}</Heading>
        <Text>Headquarters: {company.Headquarters}</Text>
      </Box>
    </Box>

  )
}

export default CompanyHeading;
