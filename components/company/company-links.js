import React from "react";
import { UnorderedList, ListItem, Icon, Link } from '@chakra-ui/react'
import { FaGlobe, FaTwitter, FaLink } from 'react-icons/fa'
import NextLink from 'next/link'

function CompanyLinks({ company }) {
  return (
    <UnorderedList styleType={'none'} lineHeight='1.6rem' ml={0}>
      <ListItem display="flex" alignItems="center">
        <Icon as={FaGlobe} w={4} h={4} mr={2}></Icon>
        <a href={'https://' + company.companyUrl}>{company.companyUrl}</a>
      </ListItem>
      <ListItem display="flex" alignItems="center">
        <Icon as={FaTwitter} w={4} h={4} mr={2}></Icon>
        <Link href={'https://www.twitter.com/' + company.twitterHandle}>{'twitter.com/' + company.twitterHandle}</Link>
      </ListItem>
      <ListItem display="flex" alignItems="center">
        <Icon as={FaLink} w={4} h={4} mr={2}></Icon>
        <Link href={'https://' + company.integrationsPage}>{company.companyName + ' Integrations'}</Link>
      </ListItem>
    </UnorderedList>
  )
};

export default CompanyLinks;