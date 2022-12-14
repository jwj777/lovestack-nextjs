import React from "react";
import { Box } from '@chakra-ui/react'
import ReactMarkdown from "react-markdown";

function PageContent({ pagedata }) {
  return (
    <Box className="main-content">
      <ReactMarkdown>{pagedata.attributes.Body}</ReactMarkdown>
    </Box>
  )}

export default PageContent;