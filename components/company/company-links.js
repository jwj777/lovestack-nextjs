import React from "react";
import { UnorderedList, ListItem, Icon, Link, Text } from '@chakra-ui/react'
import { FaGlobe, FaTwitter, FaLink } from 'react-icons/fa'
import styles from './company-links.module.css'
import NextLink from 'next/link'

function CompanyLinks({ company }) {
  return (

    <UnorderedList className={styles.CompanyLinksContainer} styleType={'none'}>
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