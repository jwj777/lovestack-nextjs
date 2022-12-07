import React from "react";
import { Heading, Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import CategoryItemChild from '../../components/category/category-item-child';
import CategoryItemParent from '../../components/category/category-item-parent';
import styles from '../../components/category/category-item.module.css'


function CategoryItem({ item }) {
  return(
      <Box className={styles.categoryItemBox} key={item.slug} display='flex' flexDirection={{ base: 'column', md: 'row'}} mr={16} mb={0} pt={12} pl={2} pb={6}>
        <CategoryItemParent item={item}>{item.categoryNameParent}</CategoryItemParent>
        <Box display='flex' flexWrap='wrap' alignItems='center'>
          {item.childCategories.map((item, index) => {
            return(
              <CategoryItemChild item={item} key={index} />
            )
          })}
        </Box>  
      </Box>
    )
};

export default CategoryItem;
