import React from "react";
import { Heading, Image, Text, Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

function HeroPage({ pagedata }) {
  return (
    <Box>
      <Heading as='h1' mb={2} fontSize={{ base: '4xl', md: '6xl' }}>{pagedata.attributes.Headline}</Heading>
      <Text fontSize='2xl' mb='4.8rem' maxW='960px'>{pagedata.attributes.Subheading}</Text>
    </Box>
  )}

export default HeroPage;