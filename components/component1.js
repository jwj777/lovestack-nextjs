import { useEffect, useState, useContext } from "react";
import { Text, Box } from '@chakra-ui/react'

export default function Component1({ name, changename }) {
  useEffect(() => {
    console.log('component1 rendered')
  })
  return(
    <Box>
      <Text>Prop Name: {name}</Text>
      
    </Box>
  )
}

