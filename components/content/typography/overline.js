import React from "react";
import { Text } from '@chakra-ui/react'

function Overline({ text }) {
  return (
    <Text 
      className="overline"
      fontFamily='IBM Plex Mono'
      fontSize={{ base: 'lg', md: 'xl' }}
      fontWeight='500'
      color='teal.500'
      mb={{ base: '1.4rem', md: '1.6rem' }}
    >{text}</Text>
  )
}

export default Overline;