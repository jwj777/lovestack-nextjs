import React from 'react'
import { Box, Text, Link, Button, Icon } from '@chakra-ui/react'
import { FaRegCheckCircle } from 'react-icons/fa'

const CompanyItemPlan = ({ plan }) => {
  return (
    <Box 
      mt='1' 
      mr='4' 
      mb={{ base: '2', md: '8' }}
      pt='3' pr='4' pb='0.6rem' pl='4' 
      minW={{ base: '12rem', md: '10rem' }}
      borderColor='gray.200'
      backgroundColor='gray.50'
    >
      <Text fontSize='sm' fontWeight='500' lineHeight='1rem'>{plan.planName}</Text>
      {
        !plan.planPrice ?
        <Button href={plan.planSalesUrl} variant='sm2' size='sm' colorScheme='blue.500' mt='2' mb='2'>{plan.planSalesCta}</Button> :
        <Text fontWeight='600' fontSize='xl' color='black'>{'$' + plan.planPrice}
          {
            !plan.paymentPeriod ?
            '' :
            <Text as='span' fontSize='xs' ml='0.2rem' fontWeight='400'>{'/' + plan.paymentPeriod}</Text>
          }
        </Text>
      }
      
      {
        plan.planFreeTrial ? 
          <Box display='flex' alignItems='center'>
            <Icon as={FaRegCheckCircle} w='3' h='3' mr='1' color='blue.500'></Icon>
            <Text fontSize='sm'>Free Trial</Text> 
          </Box> :
        null
      
      }
    </Box>
  )
}

export default CompanyItemPlan;