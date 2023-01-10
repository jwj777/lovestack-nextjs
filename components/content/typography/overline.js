import React from "react";
import { Text } from '@chakra-ui/react'

function Overline({ children }) {
  return (
    <Text 
      className="overline"
      fontSize={{ base: '0.9rem', md: '1rem' }}
      fontWeight='500'
      color='gray.600'
      mb={{ base: '0.5rem', md: '1rem' }}
      textTransform='uppercase'
      letterSpacing='1.4px'
    >{ children }</Text>
  )
}

export default Overline;