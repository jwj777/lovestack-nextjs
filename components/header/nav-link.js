import React from "react";
import { Link } from '@chakra-ui/react'

function NavLink({ url }) {
  return (

    <Link 
      href={url}
      fontWeight='600'
      mt='0.4rem'
    >
      Software Categories
    </Link>

  )
}

export default NavLink;