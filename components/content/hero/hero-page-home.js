import React from "react";
import { Box, Container } from '@chakra-ui/react'
import Headline1 from "../typography/headline1";
import Subheading1 from "../typography/subheading1";

function HeroPageHome({ homepage }) {

  return (
    <Box pb={{ base: '12', md: '20 '}} pt={{ base: '12', md: '20'}}>
      <Box maxW='container.xl'>
        <Headline1 text={homepage.attributes.Headline}></Headline1>
        <Subheading1 text={homepage.attributes.Subheading}></Subheading1>
      </Box>
    </Box>
  )}

export default HeroPageHome;