import React from "react";
import { Text, Headline, Heading } from '@chakra-ui/react'

function Headline2({ text }) {
  return (
    <Heading 
      className="headline1"
      as='h1'
      fontSize={{ base: '2.4rem', md: '6xl' }}
      lineHeight={{ base: '3rem', md: '5rem' }}
      fontWeight='600'
      maxW='880px' 
      mb={{ base: '0.8rem', md: '0.4rem' }}
    >{text}</Heading>
  )
}

export default Headline2;