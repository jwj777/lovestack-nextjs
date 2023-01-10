import React from 'react'
import { Box, Text, Link, Button, Icon } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa'

const CompanyItemPlan = ({ plan }) => {
  return (
    <Box 
      mt='0' 
      mr='4' 
      mb={{ base: '2', md: '2' }}
      pt='3' pr='8' pb='0.6rem' pl='4' 
      minW={{ base: '12rem', md: '9.2rem' }}
      borderRadius='0.3rem'
      backgroundColor='gray.50'
      border='1px'
      borderColor='gray.100'
    >
      <Text fontSize='sm' fontWeight='500' lineHeight='1rem'>{plan.planName}</Text>
      {
        !plan.planPrice ?
        <Button href={plan.planSalesUrl} variant='sm2' size='sm' colorScheme='blue.500' mt='2' mb='2'>{plan.planSalesCta}</Button> :
        <Text fontWeight='600' fontSize='1.2rem' color='black'>{'$' + plan.planPrice}
          {
            !plan.paymentPeriod ?
            '' :
            <Text as='span' fontSize='xs' ml='0.1rem' fontWeight='400'>{'/' + plan.paymentPeriod}</Text>
          }
        </Text>
      }
      
      {
        plan.planFreeTrial ? 
          <Box display='flex' alignItems='center'>
            <Icon as={FaCheck} w='0.7rem' h='0.7rem' mr='1' color='blue.500'></Icon>
            <Text fontSize='sm'>Free Trial</Text> 
          </Box> :
        null
      
      }
    </Box>
  )
}

export default CompanyItemPlan;