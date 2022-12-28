import React from "react";
import { Heading, Image, Text, Box } from '@chakra-ui/react'
import CompanyCategories from "./company-categories";

const CompanyHeading = ({ company, hasCategory }) => {
  return (

    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="flex-start" 
      flexWrap={{ base: 'wrap', lg: 'nowrap' }}
      mb='8'
      mt={{ base: '10', md: '14' }}
    >
      { company.webScreenshot.data != null ?
          <Image
            width={{ base: '100%', lg: '200px' }}
            alt={company.companyName + ' Website Homepage'}
            src={ company.webScreenshot.data[0].attributes.url }
            mb={{ base: '2rem', lg: '0' }}
            boxShadow='md'
            display={{ base: 'none', md: 'block' }}

          /> :
        null 
      }
      <Box ml={{ base: '0', lg: '2rem' }}>
        <Heading as='h1' fontSize={{ base: '4xl', lg: '5xl' }}>{company.companyName}</Heading>
        <Text mb={{ base: '4', md: '0' }}><Text as='span' fontWeight='600'>Headquarters:</Text> {company.Headquarters}</Text>
        { hasCategory ? <CompanyCategories company={company} /> : null }
      </Box>
    </Box>

  )
}

export default CompanyHeading;
