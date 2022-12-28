import React from "react";
import { Box, Link, Icon } from '@chakra-ui/react'
import styles from './category-item.module.css'
import { HiArrowRight } from 'react-icons/hi'


function CategoryItemChild({ item }) {
  return (
    <Box 
      className={styles.categoryChildLinks} 
      display='flex' 
      alignItems='center' 
      justifyContent='space-between'
      _hover={{ background: 'blue.50' }}
    >
      <Link 
        href={"/categories/" + item.categorySlugChild} 
        pt={4}
        pr={8}
        pb={4}
        pl={{ base: '0', md: '1rem' }}
        m={0}
        display='block' 
        fontSize={{ base: 'md', md: 'lg'}}
        fontWeight='600'
      >
        {item.categoryNameChild}
      </Link>
      <Icon 
        display={{ base: 'block', sm: 'block' }}
        position='relative' 
        right={{ base: '1rem', md: '2rem' }}
        as={HiArrowRight} 
        w={4} h={4} mr={0}
      >
      </Icon>
    </Box>
      
  )
};

export default CategoryItemChild;
