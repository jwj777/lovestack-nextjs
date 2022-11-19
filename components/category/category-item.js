import React from "react";
import { Heading, Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import CategoryItemChild from '../../components/category/category-item-child';
import CategoryItemParent from '../../components/category/category-item-parent';


function CategoryItem({ item }) {
  return(
    <Box key={item.slug} mb="2rem">

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
