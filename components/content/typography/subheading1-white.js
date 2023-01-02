import React from "react";
import { Text } from '@chakra-ui/react'

function Subheading1White({ text }) {
  return (
    <Text 
      className="subheading1"
      fontSize={{ base: '1.1rem', md: '1.6rem' }}
      lineHeight={{ base: '1.7rem', md: '2.3rem' }}
      fontWeight='300'
      maxW='920px' 
      color='gray.100'
    >{text}</Text>
  )
}

export default Subheading1White;