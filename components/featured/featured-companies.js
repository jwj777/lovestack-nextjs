import React from "react";
import { Box, Heading, Text } from '@chakra-ui/react'
import FeaturedList from "./featured-list";

function FeaturedCompanies({ companies }) {
  return (
    <Box>
      <Box>
        <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} mb={2}>Featured Companies</Heading>
        <Text fontSize='xl' mb={12}>Our collection of lesser-known marketing software that deserves more attention.</Text>
      </Box>

      <Box>
        <FeaturedList companies={companies} />
      </Box>
    </Box>
  )
}

export default FeaturedCompanies;