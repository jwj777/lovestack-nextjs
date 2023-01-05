import React from 'react'
import { Box, Text, Button, Icon } from '@chakra-ui/react'
import { FaRegCheckCircle } from 'react-icons/fa'

const CompanyPlan = ({ plan, index }) => {
  return (
    <Box 
      mr={{ base: '0', md: '6' }} 
      mb={{ base: '4', md: '0' }} 
      pt='4' pr='6' pb='6' pl='4' 
      backgroundColor='gray.50'
      width={{ base: '100%', md: 'auto' }}
      maxW={{ base: '100%', md: '240px' }}
      borderRadius='md'
      boxShadow='md'
    >
      <Text fontWeight='600' mb='2'>{plan.planName}</Text>
      {
        !plan.planPrice ?
        null :
        <Text fontWeight='500' fontSize='2xl' lineHeight='1.6rem'>{'$' + plan.planPrice}
          {
            !plan.paymentPeriod ?
            '' :
            <Text as='span' fontSize='sm' color='gray.400' ml='1'>{'/' + plan.paymentPeriod}</Text>
          }
        </Text>
      }
      {
        plan.planDescription ?
        <Text fontSize='sm' mt='1' mb='3'>{plan.planDescription}</Text> :
        null
      }
      {
        !plan.planSalesCta ?
        null :
        <Button href={plan.planSalesUrl} variant='blue500' size='sm' mt='2' mb='2'>{plan.planSalesCta}</Button>
      }
      {
        plan.planFreeTrial ? 
          <Box display='flex' alignItems='center'>
            <Icon as={FaRegCheckCircle} w='3' h='4' mr='1' color='blue.500'></Icon>
            <Text fontSize='sm'>Free Trial</Text> 
          </Box> :
        null
      }
    </Box>
  )
}

export default CompanyPlan;
