import React from "react";
import { Heading, Image, Text, Box } from '@chakra-ui/react'
import CompanyCategories from "./company-categories";
import Rank from "../company-lists/rank";

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
            src={ company.webScreenshot.data[0].attributes.formats.small.url }
            mb={{ base: '2rem', lg: '0' }}
            boxShadow='md'
            display={{ base: 'none', md: 'block' }}

          /> :
        null 
      }
      <Box ml={{ base: '0', lg: '2rem' }}>
        <Heading as='h1' mb='2' fontSize={{ base: '3xl', lg: '4xl' }}>{company.companyName}</Heading>
        <Text mb={{ base: '0', md: '0' }}><Text as='span' fontWeight='600'>Headquarters:</Text> {company.Headquarters}</Text>
          <Rank rank={company.authorityRank} />
      </Box>
    </Box>

  )
}

export default CompanyHeading;
