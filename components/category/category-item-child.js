import React from "react";
import { Heading, Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'


function CategoryItemChild({ item }) {
  return (
    <Box mb={1}>
      <LinkBox>
        <LinkOverlay href={"/categories/" + item.categorySlugChild}>
          <Text fontSize="md">{item.categoryNameChild}</Text>
        </LinkOverlay>
      </LinkBox>
    </Box>
  )
};

export default CategoryItemChild;
