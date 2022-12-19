import React from "react";
import { Box } from '@chakra-ui/react'
import ReactMarkdown from "react-markdown";

function BodyContent({ pagedata }) {
  return (
    <Box className="bodyContent" maxW='5xl'>
      <ReactMarkdown>{pagedata.attributes.Body}</ReactMarkdown>
    </Box>
  )}

export default BodyContent;