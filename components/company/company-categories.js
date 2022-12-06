import React from "react";
import { Box, Link, Heading, Text } from '@chakra-ui/react'
import styles from './company-features.module.css'

function CompanyCategories({ company }) {
  return (
    <Box mr={12}>
      <Heading as='h3' mb={2}>Categories: </Heading>
      <Box display='flex' flexDirection='column'>
        {company.product_categories.data.map((company, index) => {
          return(
            <Link key={company.attributes.slug + '__' + index} href={company.attributes.slug} pb={1}>{company.attributes.categoryName}</Link>
          )
        })}
      </Box>
    </Box>
    )
  };
  
  export default CompanyCategories;