import React from "react";
import { Box, Icon, Text } from '@chakra-ui/react'
import { FaRegCheckCircle, FaCheckCircle } from 'react-icons/fa'


function CompanyPrice({ company }) {
  return (
    <Box mb={6}>
      {
      company.entryPriceMonthly ?
        <Box mr={4} mb={0}>
          <Box display='flex' flexDirection='column'>
            <Text fontWeight='600' fontSize='3xl' mb='0.1rem'>{'$ ' + company.entryPriceMonthly}</Text>
            <Text fontSize='sm' mb={3}>Entry Monthly Price</Text>
            
          </Box>              
        </Box> :
      null
      }

      {
      company.freeTrial ? 
        <Box display='flex' alignItems='center' minW='180px'>
          <Icon as={FaRegCheckCircle} w={4} h={4} mr={1} color='cyan.500'></Icon>
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
};

export default CompanyPrice;