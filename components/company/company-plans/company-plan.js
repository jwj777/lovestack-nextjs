import React from 'react'
import { Box, Text, Button, Icon } from '@chakra-ui/react'
import { FaRegCheckCircle } from 'react-icons/fa'

const CompanyPlan = ({ plan, index }) => {
  return (
    <Box 
      mr='6' mb={{ base: '2', md: '0' }} p='4' pt='3' pr='12' pb='2' pl='4' 
      backgroundColor='blue.50'
      borderColor='gray.100'
      minW={{ base: '90%', md: 'auto' }}
    >
      <Text fontWeight='600'>{plan.planName}</Text>
      {
        !plan.planPrice ?
        <Button href={plan.planSalesUrl} variant='blue500' size='sm' mt='2' mb='2'>{plan.planSalesCta}</Button> :
        <Text fontWeight='500' fontSize='3xl'>{'$' + plan.planPrice}
          {
            !plan.paymentPeriod ?
            '' :
            <Text as='span' fontSize='sm' color='gray.400' ml='1'>{'/' + plan.paymentPeriod}</Text>
          }
        </Text>
      }
      {
        plan.planDescription ?
        <Text fontSize='sm' mb='3'>{plan.planDescription}</Text> :
        null
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
