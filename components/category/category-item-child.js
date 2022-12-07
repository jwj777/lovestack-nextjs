import React from "react";
import { Box, Link } from '@chakra-ui/react'
import styles from './category-item.module.css'


function CategoryItemChild({ item }) {
  return (
    <Box className={styles.categoryPageLinks} mb={8} mr={4}>
      <Link href={"/categories/" + item.categorySlugChild} fontSize={{ base: 'md', md: 'lg'}}>{item.categoryNameChild}</Link>
    </Box>
  )
};

export default CategoryItemChild;
