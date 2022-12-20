import React from "react";
import { Text } from '@chakra-ui/react'

function DisplayLong1({ text }) {
  return (
    <Text 
      className="displayLong1"
      fontSize={{ base: '2xl', md: '2.8rem' }}
      lineHeight={{ base: '2.2rem', md: '3.2rem' }}
      fontWeight='600'
      color='nlack'
      maxW='800px' 
      mb={{ base: '2rem', md: '2rem' }}
    >{text}</Text>
  )
}

export default DisplayLong1;
