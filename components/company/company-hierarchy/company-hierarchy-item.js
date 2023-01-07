import React from "react";
import { Box, Text, Link } from '@chakra-ui/react'
import CompanyItemFeatures2 from "./company-item-features";

function CompanyHierarchyItem({ company, index }) {
  return(

    <Box 
      key={company.companyName + '__' + index}
      p='8'
      pr='14'
      mr='8'
      borderRadius='0.6rem'
      boxShadow='lg'
      borderTop='1px'
      borderColor='gray.50'
    >
    <Box>
      <Box mb='2'>
        <Link href={"/companies/" + company.slug}>
          <Text 
            fontSize={{ base: 'xl', md: 'xl' }}
            fontWeight="600" 
            mb='0'
            color='blue.500'
            _hover = {{ textDecoration: 'none' }}
          >
            {company.companyName}
          </Text>
        </Link>
        <Text mb={{ base: '0', md: '0' }}><Text as='span' fontWeight='600'>Founded:</Text> {company.yearFounded}</Text>
      </Box>
      <CompanyItemFeatures2 company={company} />
    </Box>
  </Box>





  )
}

export default CompanyHierarchyItem;
