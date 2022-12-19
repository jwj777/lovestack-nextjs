import React from "react";
import { Text } from '@chakra-ui/react'

function DisplayLong1({ text }) {
  return (
    <Text 
      className="displayLong1"
      fontSize={{ base: '2xl', md: '4xl' }}
      lineHeight={{ base: '2.2rem', md: '3rem' }}
      fontWeight='500'
      maxW='800px' 
      mb={{ base: '2rem', md: '4rem' }}
    >{text}</Text>
  )
}

export default DisplayLong1;
