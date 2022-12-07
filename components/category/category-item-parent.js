import React from "react";
import { Heading, Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'


function CategoryItemParent({ item }) {
  return (
    <Text fontSize='1.48rem' fontWeight='600' mb='1.6rem' mt='-0.72rem' mr={8} minW={{base: 'auto', md: '228px'}}>{item.categoryNameParent}</Text>
  )
};

export default CategoryItemParent;
