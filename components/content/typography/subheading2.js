import React from "react";
import { Text } from '@chakra-ui/react'

function Subheading2({ text }) {
  return (
    <Text 
      className="subheading2"
      fontSize={{ base: '1.4rem', md: '1.6rem' }}
      lineHeight={{ base: '2rem', md: '2.4rem' }}
      fontWeight='400'
      maxW='900px' 
    >{text}</Text>
  )
}

export default Subheading2;