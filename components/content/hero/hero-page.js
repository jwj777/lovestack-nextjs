import React from "react";
import { Box } from '@chakra-ui/react'
import Subheading1 from "../typography/subheading1";
import Headline2 from "../typography/headline2";

function HeroPage({ pagedata }) {

  return (
    <Box mb={{ base: '3rem', md: '4rem' }}>
      <Headline2 text={pagedata.attributes.Headline}></Headline2>
      <Subheading1 text={pagedata.attributes.Subheading}></Subheading1>
    </Box>
  )}

export default HeroPage;