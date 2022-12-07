import React from "react";
import { Heading, Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'


function CategoryItemParent({ item }) {
  return (
    <Text fontSize='3xl' fontWeight='500' mb={6}>{item.categoryNameParent}</Text>
  )
};

export default CategoryItemParent;
