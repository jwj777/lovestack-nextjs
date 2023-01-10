import React from "react";
import { Box, Link, Text, Icon } from '@chakra-ui/react'
import { HiArrowRight } from "react-icons/hi";
import Overline from "../../content/typography/overline";


function CategoryItemSm({ item }) {
  return(
      <Box key={item.slug} >
        <Overline
          fontSize='lg' 
          fontWeight='600' 
          minW={{base: 'auto', md: '264px'}}
        >
          {item.categoryNameParent}
        </Overline>
        <Box mr='8'>
          {item.childCategories.map((item, index) => {
            return(
              <Box 
                display='flex' 
                alignItems='center' 
                justifyContent='space-between'
                _last={{ borderBottom: '1px' }}
              >
                <Link 
                  pt='4' pr='8' pb='4'
                  pl={{ base: '0', md: '1rem' }}
                  display='block' 
                  fontSize='sm'
                  fontWeight='600'
                  borderTop='1px'
                  width='100%'
                  minW='280px'
                  _hover={{ background: 'blue.50' }}
                  
                >
                  {item.categoryNameChild}
                </Link>
                <Icon 
                  display={{ base: 'block', sm: 'block' }}
                  position='relative' 
                  right={{ base: '1rem', md: '2rem' }}
                  as={HiArrowRight} 
                  w='0.9rem' h='0.9rem'
                >
                </Icon>
              </Box>
            )
          })}
        </Box>  
      </Box>
    )
};

export default CategoryItemSm;
