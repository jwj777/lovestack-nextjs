import React from "react";
import { Text } from '@chakra-ui/react'

function SectionHeading({ children }) {
  return (
    <Text 
      className="sectionHeading"
      as='h3'
      fontSize={{ base: '1.4rem', md: '2rem' }}
      lineHeight={{ base: '2rem', md: '2.6rem' }}
      fontWeight='600'
      maxW='960px' 
      color='black'
      mb='2'
    >{ children }</Text>
  )
}

export default SectionHeading;