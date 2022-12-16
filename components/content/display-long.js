import React from "react";
import { Text } from '@chakra-ui/react'
import ReactMarkdown from "react-markdown";

function DisplayLong1({ text }) {
  return (
    <Text 
      className="displayLong1"
      fontSize={{ base: '3xl', md: '4xl' }}
      lineHeight={{ base: '2.6rem', md: '3rem' }}
      fontWeight='500'
      maxW='800px' 
      mb={16}
    >{text}</Text>
  )}

export default DisplayLong1;
