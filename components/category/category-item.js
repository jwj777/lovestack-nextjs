import React from "react";
import { Box } from '@chakra-ui/react'
import CategoryItemChild from '../../components/category/category-item-child';
import CategoryItemParent from '../../components/category/category-item-parent';
import styles from '../../components/category/category-item.module.css'


function CategoryItem({ item }) {
  return(
      <Box 
      className={styles.categoryItemBox} 
      key={item.slug} 
      display='flex' 
      flexDir={{ base: 'column', md: 'row' }}
      mb={12} pl={0} pb={8}
      
      >
        <CategoryItemParent item={item} />
        <Box width='100%'>
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
