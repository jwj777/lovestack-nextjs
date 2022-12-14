import React from "react";
import { Box, Link, Text } from '@chakra-ui/react'
import styles from './company-item.module.css'
import CompanyItemImg from "./company-item-img";
import CompanyItemPrice from "./company-item-price";

function CompanyItem({ company, index }) {
  return (
  <Box key={company.companyName + '__' + index} className={styles.companyItem}>
    <Box display={{ base: 'block', md: 'flex' }} justifyContent='space-between'>
      <Box display="flex" alignItems={{ base: "center", lg: "center" }} justifyContent="flex-start" mb={6}>
        <Link href={"/companies/" + company.slug}>
          <CompanyItemImg company={company} />
        </Link>
        <Box>
          <Link href={"/companies/" + company.slug}>
            <Text fontSize="2xl" fontWeight="600" minW="00px" width='100%' className={"list-row-item "}>{company.companyName}</Text>
          </Link>
          <Text>dRank: <Text as='span' color='orange.300' fontWeight='700'>{company.authorityRank}</Text></Text>
        </Box>
      </Box>
      <CompanyItemPrice company={company} />
    </Box>

    <Box display='flex' maxW='720px' width='100%' mr={{ base: '0', md: '4rem'}} flexWrap={{ base: 'wrap', md: 'nowrap'}}>
      <Text fontWeight='600' mr={4}>Features:</Text>
      <Box display='flex' flexWrap='wrap'>
        {company.featureNameArray.map((item, index) => {
          return ( <Text key={index} fontSize='md' mr={3} mb={1}>{item}</Text> )
        })}
      </Box>
    </Box>
  </Box>
  )
};

export default CompanyItem;