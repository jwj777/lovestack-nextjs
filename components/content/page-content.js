import React from "react";
import { Box } from '@chakra-ui/react'
import ReactMarkdown from "react-markdown";

function PageContent({ pagedata }) {
  return (
    <Box className="main-content">
      <ReactMarkdown children={pagedata.attributes.Body} />
    </Box>
  )}

export default PageContent;