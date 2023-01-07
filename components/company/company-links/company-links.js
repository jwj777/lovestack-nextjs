import React from "react";
import { UnorderedList, ListItem, Icon, Link, Box, Button } from '@chakra-ui/react'
import { FaGlobe, FaTwitter, FaLink } from 'react-icons/fa'
import NextLink from 'next/link'
import CompanyLink from "./company-link";

function CompanyLinks({ company }) {
  return (
    <Box 
      display='flex' 
      flexDir={{ base: 'column', md: 'row' }}
      mb='6'       
      pb='8'
      borderBottom='1px'
      borderColor='gray.100'
      maxW='5xl'  
    >
      <CompanyLink company={company} icon={FaGlobe} url={'https://' + company.companyUrl} label={company.companyUrl}/>
      <CompanyLink company={company} icon={FaTwitter} url={'https://www.twitter.com/' + company.twitterHandle} label={'twitter.com/' + company.twitterHandle}/>
      { company.integrationsPage ? 
      <CompanyLink 
        company={company} 
        icon={FaLink} 
        url={company.integrationsPage} 
        label={'Integrations'}
      /> : null
      }
    </Box>
  )
};

export default CompanyLinks;