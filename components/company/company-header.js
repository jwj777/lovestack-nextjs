import React from "react";
import { Heading, Image, Text, Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

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
        <Heading as='h1' mb={2}>{company.companyName}</Heading>
        {/* <Box display='flex' flexWrap='wrap' alignItems='center'>
          <Text mr={2}>Categories: </Text>
          {company.product_categories.data.map((company, index) => {
            return(
              <Link href={company.attributes.slug} mr={4}>{company.attributes.categoryName}</Link>

            )
          })}
        </Box> */}

        <Text>Headquarters: {company.Headquarters}</Text>
      </Box>
    </Box>

  )
}



export default CompanyHeading;
