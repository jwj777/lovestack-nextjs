import React from "react";
import { Box, Text, Icon } from '@chakra-ui/react'
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa'

function CompanyItemPrice({ company, index }) {
  return(
    <Box mb={{ base: '1rem', md: '0'}}>
      {
        company.entryPriceMonthly ? 
            <Box 
              display='flex' 
              alignItems='center' 
              justifyContent='flex-start' 
              minW='180px' mb='0.4rem'
            >
              <Text fontSize='2xl' fontWeight='500'mr={2} mb={0} align='right'>{'$' + company.entryPriceMonthly}</Text>
              <Text fontSize='xs' lineHeight='.9rem'>Starting<br /> Monthly Price</Text>        
            </Box> :  
        null
      }
    
      {
        company.freeTrial ? 
          <Box display='flex' alignItems='center' minW='180px'>
            <Icon as={FaRegCheckCircle} w={4} h={4} mr={1} color='blue.500'></Icon>
            <Text fontSize='md'>Free Trial</Text> 
          </Box> :
        null
      }
    
      {
        company.freePricingTier ? 
          <Box display='flex' alignItems='center' minW='180px'>
            <Icon as={FaCheckCircle} w={4} h={4} mr={1} color='cyan.500'></Icon>
            <Text fontSize='md'>Free Pricing Tier</Text>
          </Box> :
        null
      }
  </Box>
  )
}

export default CompanyItemPrice;