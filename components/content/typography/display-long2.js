import React from "react";
import { Text } from '@chakra-ui/react'

function DisplayLong2({ text }) {
  return (
    <Text 
      className="displayLong2"
      fontSize={{ base: '1rem', md: '1.32rem' }}
      lineHeight={{ base: '1.56rem', md: '2rem' }}
      color='gray.600'
      fontWeight='400'
      maxW='8xl' 
      mb={{ base: '1.4rem', md: '1.6rem' }}
    >{text}</Text>
  )
}

export default DisplayLong2;
