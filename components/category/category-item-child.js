import React from "react";
import { Heading, Box, Link, LinkOverlay, Text } from '@chakra-ui/react'


function CategoryItemChild({ item }) {
  return (
    <Box mb={6} mr={4}>
      <Link href={"/categories/" + item.categorySlugChild} fontSize="md"  backgroundColor='#f4f4f4' borderRadius='0rem' p={2} pr={4} pl={4}>{item.categoryNameChild}</Link>
    </Box>
  )
};

export default CategoryItemChild;
