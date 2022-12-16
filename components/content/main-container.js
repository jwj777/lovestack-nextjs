import React from "react";
import { Box } from '@chakra-ui/react'
import ReactMarkdown from "react-markdown";

function MainContainer({ pagedata }) {

  return (
    <Box className="main-content">{ pagedata }</Box>
  )}

export default MainContainer;