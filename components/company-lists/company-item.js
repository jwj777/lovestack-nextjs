import React from "react";
import { Box, Link, Text } from '@chakra-ui/react'
import CompanyItemImg from "./company-item-img";
import Rank from "./rank";
import CompanyItemPlans from "./company-item-plans/company-item-plans";
import CompanyItemFeatures from "./company-item-features";

function CompanyItem({ company, index }) {
  return (
  <Box 
    key={company.companyName + '__' + index} className='companyItem'
    display='flex'
    justifyContent='space-between'
    flexDir={{ base: 'column', md: 'row' }}
    alignItems='flex-start'
    pt='8' pb='16'
    borderTop='1px'
    borderColor='black'
    // _last={{ borderBottom: '1px' }}
  >
    <Box>
      <Box display="flex" alignItems={{ base: "center", lg: "center" }} justifyContent="flex-start" mb='8'>
        <Link href={"/companies/" + company.slug}>
          <CompanyItemImg company={company} />
        </Link>
        <Box>
          <Link href={"/companies/" + company.slug}>
            <Text fontSize={{ base: '1.6rem', md: '2rem' }} lineHeight={{ base: '2.1rem', md: '2.7rem' }} fontWeight="700" mb='0' _hover = {{ textDecoration: 'none' }}>
              {company.companyName}
            </Text>
          </Link>
          <Rank rank={company.authorityRank} />
        </Box>
      </Box>
      <CompanyItemFeatures company={company} />
    </Box>

    <CompanyItemPlans plans={company.companyPlan} />
   
  </Box>
  )
};

export default CompanyItem;