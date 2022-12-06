import React from "react";
import { Heading, Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import CategoryItemChild from '../../components/category/category-item-child';
import CategoryItemParent from '../../components/category/category-item-parent';
import styles from '../../components/category/category-item.module.css'


function CategoryItem({ item }) {
  return(
    <Box className={styles.categoryItemBox} key={item.slug} mt={8} mb={8} mr={16} p={4} pl={8} minW="360">

      <CategoryItemParent item={item}>{item.categoryNameParent}</CategoryItemParent>
      {item.childCategories.map((item, index) => {
        return(
          <CategoryItemChild item={item} key={index} />
        )
      })}

    </Box>
    )
};

export default CategoryItem;
