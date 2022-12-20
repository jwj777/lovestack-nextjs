import React from "react";
import { Box } from '@chakra-ui/react'
import Subheading2 from "../typography/subheading2";
import Headline1B from "../typography/headline-1b";

function HeroPage({ pagedata }) {

  return (
    <Box mb={{ base: '3rem', md: '4rem' }} mt='16'>
      <Headline1B text={pagedata.attributes.Headline}></Headline1B>
      <Subheading2 text={pagedata.attributes.Subheading}></Subheading2>
    </Box>
  )}

export default HeroPage;