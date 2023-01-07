import React from "react";
import { Link } from '@chakra-ui/react'

function LinkBasic({ children, url }) {
  return (
    <Link 
      href={url}
      color='blue.500'
      textDecor='underline'
      _hover={{ color: 'blue.700' }}

    >{ children }</Link>
  )
}

export default LinkBasic;