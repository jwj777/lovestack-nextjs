import React from "react";
import { Box, Text, Link } from '@chakra-ui/react'
import CompanyItemFeatures2 from "./company-item-features";
import CompanyPlans from "../company-plans/company-plans";



function CompanyHierarchyItem({ company, index }) {
  return(

    <Box 
    key={company.companyName + '__' + index}
    pt='8' pb='8'
    borderTop='1px'
    borderColor='black'
    _last={{ borderBottom: '1px' }}
  >
    <Box>
      <Box mb='2'>
          <Link href={"/companies/" + company.slug}>
            <Text 
              fontSize={{ base: '1.6rem', md: '1.8rem' }}
              fontWeight="600" 
              mb='0'
              _hover = {{ textDecoration: 'none' }}
            >
              {company.companyName}
            </Text>
          </Link>
      </Box>
      <CompanyItemFeatures2 company={company} />
    </Box>
  </Box>





  )
}

export default CompanyHierarchyItem;
