import React from "react";
import { Heading, Image, Text, Box } from '@chakra-ui/react'

const CompanyHeading = ({ company }) => {
  return (

    <Box display="flex" alignItems="center" justifyContent="flex-start" mb={8}>
      <Image
        htmlWidth={'220px'}
        alt={company.companyName + ' Website Homepage'}
        src={
          company.webScreenshot.data != null ?
          company.webScreenshot.data[0].attributes.url :
          ""
        }
        
      />
      <Box pl={8}>
        <Heading as='h1'>{company.companyName}</Heading>
        <Text>Categories: {
          company.product_categories.data[0] != undefined ?
          company.product_categories.data[0].attributes.categoryName :
          ""
        }</Text>
        <Text>{company.Headquarters}</Text>
      </Box>
    </Box>

  )
}



export default CompanyHeading;
