import React from "react";
import { Box, Text } from '@chakra-ui/react'
import ReactMarkdown from "react-markdown";

function BodyContent({ text }) {
  return (
    <Box maxW='4xl' className='bodyContent'>
      <Box dangerouslySetInnerHTML={{ __html: text }}></Box>
    </Box>
  )}

export default BodyContent;