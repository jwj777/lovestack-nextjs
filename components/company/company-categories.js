import React from "react";
import { Box, Link, Text } from '@chakra-ui/react'

function CompanyCategories({ company }) {
  return (

    <Box display='flex' flexDir={{ base: 'column', md: 'row' }}>
      <Text fontWeight='600' mr='1'>Categories:</Text>
      <Box display='flex' flexWrap='wrap'>
        {company.product_categories.data.map((company, index) => {
          return(
            <Link 
              key={company.attributes.slug + '__' + index} 
              href={'/categories/' + company.attributes.slug} 
              mr='3'
              pb={1}
              color='blue.600'
              textDecor='underline'
            >{company.attributes.categoryName}</Link>
          )
        })}
      </Box>
    </Box>
    )
  };
  
  export default CompanyCategories;