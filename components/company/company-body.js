import React from "react";
import { Box } from '@chakra-ui/react'


const CompanyBody = ({ company }) => {
  return (
  <Box 
    className='ck-content' 
    mt={{ base: '3rem', md: '0' }} 
    mb='12'
    maxW='4xl'
    pb='4'
    borderBottom='1px'
    borderColor='gray.100'
  >
    <Box className='bodyContentCompany' dangerouslySetInnerHTML={{ __html: company.companyDescriptionCk }}></Box>
  </Box>
  )
}

export default CompanyBody;
