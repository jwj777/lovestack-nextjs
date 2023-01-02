import React from 'react'
import { Box, Text, Link, Button, Icon } from '@chakra-ui/react'
import { FaRegCheckCircle } from 'react-icons/fa'

const CompanyItemPlanMobile = ({ plan }) => {
  return (

    <Box 
      display='flex'
      alignItems='center'
      mt='1' 
      mr='4' 
      mb={{ base: '2', md: '8' }}
      pt='3' pr='4' pb='0.6rem' pl='4' 
      borderColor='gray.200'
      backgroundColor='gray.50'
    >
      <Text flexGrow='2' fontSize='sm' fontWeight='600' lineHeight='1rem' minW='80px'>{plan.planName}</Text>
        {
          !plan.planPrice ?
          <Button href={plan.planSalesUrl} variant='sm2' size='sm' colorScheme='blue.500' mt='2' mb='2'>{plan.planSalesCta}</Button> :
          <Text fontWeight='600' fontSize='lg' color='black'>{'$' + plan.planPrice}
            {
              !plan.paymentPeriod ?
              '' :
              <Text as='span' fontSize='sm' ml='0.1rem' fontWeight='400'>{'/' + plan.paymentPeriod}</Text>
            }
          </Text>
        }
      </Box>  
  )
}

export default CompanyItemPlanMobile;