import React from "react";
import { Icon, Link, Button } from '@chakra-ui/react'


function CompanyLink({ icon, url, label }) {
  return (
    <Button 
      display="flex" 
      alignItems="center" 
      justifyContent='flex-start'
      width={{ base: 'auto', md: 'auto' }}
      maxW='fit-content'
      size='sm'
      mr='4' 
      mb={{ base: '2', md: '0' }}
      pr='6'
      pl='4'
      variant='blue50'
    >
      <Icon as={icon} w={4} h={4} mr={2}></Icon>
      <Link lineHeight='0' href={url}>{label}</Link>
    </Button>
  )
};

export default CompanyLink;