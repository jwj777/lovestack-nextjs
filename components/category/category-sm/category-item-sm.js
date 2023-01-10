import React from "react";
import { Box, Link, Text } from '@chakra-ui/react'
import CardOutline from "../../card/card-outline";
import CardHeaderOutline from "../../card/card-header-outline";
import CardBodyPySm from "../../card/card-body-py-sm";


function CategoryItemSm({ item }) {
  return(
    <Box mr='6' mb='6' width={{ base: '100%', sm: 'auto' }}>
    <CardOutline>
        <CardHeaderOutline>
          <Text fontSize='lg' fontWeight='600'>{item.categoryNameParent}</Text>
        </CardHeaderOutline>
        <CardBodyPySm padding={'sm'}>
          {item.childCategories.map((item, index) => {
            return(
              <Box 
                key={index}
                borderTop='1px'
                borderColor='gray.100'
                width='100%'
                _first={{ borderTop: '0' }}
                _hover={{ color: 'blue.500' }}
              >
                <Link 
                  py='0.9rem'
                  pr='8px'
                  display='block' 
                  fontSize='0.9rem'
                  fontWeight='500'
                  minW='226px'
                >
                  {item.categoryNameChild}
                </Link>
              </Box>
            )
          })}
        </CardBodyPySm>  
      </CardOutline>
      </Box>
    )
};

export default CategoryItemSm;
