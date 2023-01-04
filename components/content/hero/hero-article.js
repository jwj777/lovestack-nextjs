import React from "react";
import { Box, Text } from '@chakra-ui/react'
import Subheading2 from "../typography/subheading2";
import Headline1B from "../typography/headline-1b";

function HeroArticle({ pagedata, published }) {

  return (
    <Box mb={{ base: '3rem', md: '3rem' }} mt='16'>
      <Headline1B text={pagedata.attributes.Headline}></Headline1B>
      <Subheading2 text={pagedata.attributes.Subheading}></Subheading2>
      <Text mt='6' fontWeight='400' color='gray.500'>Published: {published}</Text>
    </Box>
  )}

export default HeroArticle;