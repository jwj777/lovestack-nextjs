import React from "react";
import { Text, Headline, Heading } from '@chakra-ui/react'

function Headline1White({ text }) {
  return (
    <Heading 
      className="headline1white"
      as='h1'
      color='white'
      fontSize={{ base: '2.6rem', md: '7xl' }}
      lineHeight={{ base: '3.4rem', md: '5rem' }}
      fontWeight='600'
      letterSpacing='-1px'
      maxW='880px' 
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1.5rem' }}
    >{text}</Heading>
  )
}

export default Headline1White;