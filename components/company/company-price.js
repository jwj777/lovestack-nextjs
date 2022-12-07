import React from "react";
import { Box, Heading, Text } from '@chakra-ui/react'


function CompanyPrice({ company }) {
  return (

    <Box display='flex' flexDirection='column'>
      <Text >Starting Monthly Price: </Text>
      <Text fontWeight='600' fontSize='lg'>{'$ ' + company.entryPriceMonthly}</Text>
    </Box>

  )
};

export default CompanyPrice;