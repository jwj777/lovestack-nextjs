import React from "react";
import { Text } from '@chakra-ui/react'

function Subheading1({ text }) {
  return (
    <Text 
      className="subheading1"
      fontSize={{ base: '1.4rem', md: '3xl' }}
      lineHeight={{ base: '2rem', md: '2.8rem' }}
      fontWeight='400'
      maxW='960px' 
      color='black'
    >{text}</Text>
  )
}

export default Subheading1;