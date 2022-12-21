import React from "react";
import { Box, Text } from '@chakra-ui/react'
import ReactMarkdown from "react-markdown";

function BodyContent({ text }) {
  return (
    <Box className="bodyContent" maxW='5xl'>
      <ReactMarkdown>{text}</ReactMarkdown>
    </Box>
  )}

export default BodyContent;