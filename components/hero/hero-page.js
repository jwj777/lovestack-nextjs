import React from "react";
import { Heading, Text, Box } from '@chakra-ui/react'

function HeroPage({ pagedata }) {

  return (
    <Box>
      <Heading as='h1' mb={2} fontSize={{ base: '4xl', md: '6xl' }}>{pagedata.attributes.Headline}</Heading>
      <Text fontSize={{ base: 'xl', md: '2xl' }} mb={{ base: '4rem', md: '4.8rem' }} maxW='960px'>{pagedata.attributes.Subheading}</Text>
    </Box>
  )}

export default HeroPage;