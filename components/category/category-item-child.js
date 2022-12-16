import React from "react";
import { Box, Link, Icon } from '@chakra-ui/react'
import styles from './category-item.module.css'
import { HiArrowRight } from 'react-icons/hi'


function CategoryItemChild({ item }) {
  return (
    <Box className={styles.categoryChildLinks} display='flex' alignItems='center' justifyContent='space-between'>
      <Link 
        href={"/categories/" + item.categorySlugChild} 
        pt={4}
        pb={4}
        pl={0}
        m={0}

        display='block' 
        fontSize={{ base: 'md', md: 'lg'}}
        fontWeight='600'
      >
        {item.categoryNameChild}
      </Link>
      <Icon 
        display={{ base: 'none', sm: 'block' }}
        position='relative' 
        right='32px' 
        as={HiArrowRight} 
        w={4} h={4} mr={2}
      >
      </Icon>
    </Box>
      
  )
};

export default CategoryItemChild;
