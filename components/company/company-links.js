import React from "react";
import { UnorderedList, ListItem, Icon, Link } from '@chakra-ui/react'
import { FaGlobe, FaTwitter } from 'react-icons/fa'

function CompanyLinks({ company }) {
  return (

    <UnorderedList className="company-links" styleType={'none'}>
      <ListItem display="flex" alignItems="center">
        <Icon as={FaGlobe} w={4} h={4} mr={2}></Icon>
        <Link href={company.companyUrl}>{company.companyUrl}</Link>
      </ListItem>
      <ListItem display="flex" alignItems="center">
        <Icon as={FaTwitter} w={4} h={4} mr={2}></Icon>
        <Link href={'https://www.twitter.com/' + company.twitterHandle}>{'twitter.com/' + company.twitterHandle}</Link>
      </ListItem>
    </UnorderedList>

  )
};

export default CompanyLinks;