import React from 'react'
import { Box, Text, Button, Icon } from '@chakra-ui/react'
import { FaRegCheckCircle } from 'react-icons/fa'

const CompanyPlan = ({ plan, index }) => {
  return (
    <Box 
      mr='8' mb={{ base: '4', md: '0' }} 
      pt='3' pr='12' pb='3' pl='4' 
      borderTop='1px'
      borderBottom={{ base: '0', md: '1px' }}
      borderColor={{ base: 'gray.200', md: 'gray.200' }}
      maxW={{ base: '100%', md: '320px' }}
    >
      <Text fontWeight='600' mb='0'>{plan.planName}</Text>
      {
        !plan.planPrice ?
        <Button href={plan.planSalesUrl} variant='blue500' size='sm' mt='2' mb='2'>{plan.planSalesCta}</Button> :
        <Text fontWeight='500' fontSize='2xl'>{'$' + plan.planPrice}
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
