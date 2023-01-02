import React from "react";
import { Box, Text, Container } from '@chakra-ui/react'
import Headline1 from "../content/typography/headline1";
import Subheading1 from "../content/typography/subheading1";
import HeroPageHome from "../content/hero/hero-page-home";

function Hero({ pagedata }) {

  return (

      <Box pb={{ base: '12', md: '20 '}} pt={{ base: '12', md: '20'}}>
        <HeroPageHome pagedata={pagedata} />
      </Box>

  )}

export default Hero;