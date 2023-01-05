import React from "react";
import { Text } from '@chakra-ui/react'

function SectionHeadingSm({ children }) {
  return (
    <Text 
      className="sectionHeadingSm"
      as='h3'
      fontSize={{ base: '1.4rem', md: '1.5rem' }}
      lineHeight={{ base: '2rem', md: '2.2rem' }}
      fontWeight='600' 
      color='black'
      mb='5'
    >{ children }</Text>
  )
}

export default SectionHeadingSm;