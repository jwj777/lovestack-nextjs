import React from "react";
import { Heading, Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'


function CategoryItemParent({ item }) {
  return (
    <Heading as='h3' mb="1rem">{item.categoryNameParent}</Heading>
  )
};

export default CategoryItemParent;
