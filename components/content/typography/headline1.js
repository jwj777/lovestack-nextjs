import React from "react";
import { Text, Headline, Heading } from '@chakra-ui/react'

function Headline1({ text }) {
  return (
    <Heading 
      className="headline1"
      as='h1'
      fontSize={{ base: '4xl', md: '7xl' }}
      lineHeight={{ base: '3rem', md: '5rem' }}
      fontWeight='600'
      maxW='880px' 
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1.5rem' }}
    >{text}</Heading>
  )
}

export default Headline1;