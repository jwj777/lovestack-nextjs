import React from "react";
import { Box, Container } from '@chakra-ui/react'
import Headline1 from "../typography/headline1";
import Subheading1 from "../typography/subheading1";

function HeroPageHome({ homepage }) {

  return (
    <Box pb={{ base: '2rem', md: '6rem '}} pt={{ base: '2rem', md: '4rem '}}>
      <Container maxW='container.xl'>
        <Headline1 text={homepage.attributes.Headline}></Headline1>
        <Subheading1 text={homepage.attributes.Subheading}></Subheading1>
      </Container>
    </Box>
  )}

export default HeroPageHome;