import React from "react";
import { Text, Headline, Heading } from '@chakra-ui/react'

function Headline1B({ text }) {
  return (
    <Heading 
      className="headline1B"
      as='h1'
      fontSize={{ base: '2.4rem', md: '3.4rem' }}
      lineHeight={{ base: '3rem', md: '4.2rem' }}
      fontWeight='700' 
      mb={{ base: '0.8rem', md: '0.6rem' }}
    >{text}</Heading>
  )
}

export default Headline1B;