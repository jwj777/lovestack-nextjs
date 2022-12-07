import React from "react";
import { Box, Heading, Text } from '@chakra-ui/react'
import FeaturedItem from "./featured-item";

function FeaturedList({ companies }) {
  return (

    companies.map((company, index) => {
      return (
        <Box mb={20} key={index}>
          <FeaturedItem company={company.attributes} />
        </Box>
      )
    })   

  )
}

export default FeaturedList;