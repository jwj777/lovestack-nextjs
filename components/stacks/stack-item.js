import React from "react";
import { Box, Link, Text, Image } from '@chakra-ui/react'

function StackItem({ company, index }) {
  return (
  <Box 
    key={company.companyName + '__' + index} className='companyItem'
    display='flex'
    flex='1'
    justifyContent='space-between'
    flexDir={{ base: 'column', md: 'row' }}
    alignItems='flex-start'
    p='4' pr={{ base: '12', md: '16' }} mr={{ base: '0', md: '8' }} mb='4'
    backgroundColor='white'
    boxShadow='lg'
    maxW='lg'
    borderRadius='lg'
  >
    <Box>
      <Link href={"/companies/" + company.slug}>
        <Box display="flex" alignItems='center'>
          <Image
            width={{ base: '32px', md: '36px' }}
            height={{ base: '32px', md: '36px' }}
            alt={company.companyName + ' Website Homepage'}
            src={ company.companyIcon.data ?
              company.companyIcon.data.attributes.url :
              ''
            }
            mr={{ base: '4', md: '6' }}
          />
          <Box>
            <Text 
              fontSize='2xl'
              fontWeight="600" 
              mb='0' mt='0'
              _hover = {{ textDecoration: 'none' }}
            >
              {company.companyName}
            </Text>
            <Box display='flex'>
              {
                company.product_categories.data.map((item) => {
                  return(
                  <Text mr='4' key={index}>{item.attributes.categoryName}</Text>
                  )
                })
              }
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  </Box>
  )
};

export default StackItem;