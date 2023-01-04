import React from "react";
import { Text, Headline, Heading } from '@chakra-ui/react'

function Heading2({ text }) {
  return (
    <Heading 
      className="headline1"
      as='h2'
      color='black'
      fontSize={{ base: '3xl', md: '4xl' }}
      lineHeight={{ base: '2rem', md: '3rem' }}
      fontWeight='600'
      letterSpacing='-1px'
      maxW='880px' 
      mt={{ base: '1rem', md: '0' }}
      mb={{ base: '1rem', md: '1.5rem' }}
    >{text}</Heading>
  )
}

export default Heading2;