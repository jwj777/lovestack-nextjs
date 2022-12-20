import React from "react";
import { Box, Text } from '@chakra-ui/react'
import styles from './category-item.module.css'


function CategoryItemParent({ item }) {
  return (
    <Box 
      mb={{ base: '1.2rem', md: '0' }} 
      borderTop={{ base: '2px', md: '1px' }}
      maxW={{ base: '100%;', sm: '480px', md: '100%'}}
      mr={{ base: '0', md: '3.2rem' }}
    >
      <Text 
        className={styles.categoryParentLinks}
        fontSize='1.6rem' 
        fontWeight='600' 
        mb={2}
        mr={12}
        pt={4}
        minW={{base: 'auto', md: '264px'}}
      >
        {item.categoryNameParent}
      </Text>
      <Text 
        maxW={{ base: '360px', md: '232px' }}
        color='gray.600' 
        fontSize='0.95rem' 
        lineHeight='1.7rem' 
      >
        {item.categorySubheadingParent}
      </Text>
    </Box>
  )
};

export default CategoryItemParent;
