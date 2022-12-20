import React from "react";
import { Box, Link, Text, textDecoration } from '@chakra-ui/react'
import styles from './company-item.module.css'
import CompanyItemImg from "./company-item-img";
import CompanyItemPrice from "./company-item-price";
import Rank from "./rank";

function CompanyItem({ company, index }) {
  return (
  <Box key={company.companyName + '__' + index} className={styles.companyItem}>
    <Box display={{ base: 'block', md: 'flex' }} justifyContent='space-between'>
      <Box display="flex" alignItems={{ base: "center", lg: "center" }} justifyContent="flex-start" mb={10}>
        <Link href={"/companies/" + company.slug}>
          <CompanyItemImg company={company} />
        </Link>
        <Box>
          <Link href={"/companies/" + company.slug}>
            <Text 
              fontSize={{ base: '1.5rem', md: '1.8rem' }}
              fontWeight="700" 
              mb='0'
              _hover = {{ textDecoration: 'none' }}
            >
              {company.companyName}
            </Text>
          </Link>
          <Rank rank={company.authorityRank} />
    
        </Box>
      </Box>
      <CompanyItemPrice company={company} />
    </Box>

    <Box display='flex' maxW='4xl' width='100%' mr={{ base: '0', md: '4rem'}} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
      <Text fontWeight='700' mr={4} display='block'>Features</Text>
      <Box display='flex' flexWrap='wrap'>
        {company.featureNameArray.map((item, index) => {
          return ( 
          <Text key={index} fontSize='md' mr={2} mb={1}>{item}<Text as='span'>, </Text></Text>
          )
        })}
      </Box>
    </Box>
  </Box>
  )
};

export default CompanyItem;