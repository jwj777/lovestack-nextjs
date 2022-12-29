import React from "react";
import { Text } from '@chakra-ui/react'

function SectionHeading({ text }) {
  return (
    <Text 
      className="sectionHeading"
      as='h3'
      fontSize={{ base: '1.4rem', md: '2xl' }}
      lineHeight={{ base: '2rem', md: '2.4rem' }}
      fontWeight='600'
      maxW='960px' 
      color='black'
      mb='4'
    >{text}</Text>
  )
}

export default SectionHeading;