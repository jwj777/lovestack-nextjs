import React from "react";
import { Heading, Text, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Rank from "../company-lists/rank";
import LinkBasic from "../content/typography/link-basic";

const CompanyHeading = ({ company, hasCategory }) => {
  return (

    <Box 
      display="flex" 
      justifyContent="flex-start" 
      mb={{ base: '6', md: '10' }}
      mt={{ base: '10', md: '16' }}
    >
      { company.webScreenshot.data != null ?
        <Box className='companyScreenshot' display={{ base: 'none', md: 'block' }}>
          <Image
            display={{ base: 'none', md: 'block' }}
            width='200px'
            height='120px'
            alt={company.companyName + ' Website Homepage'}
            src={ company.webScreenshot.data[0].attributes.formats.small.url }
          />
        </Box>   :
        null 
      }
      <Box ml={{ base: '0', lg: '2rem' }}>
        <Box>
          <Heading as='h1' mb='1' fontSize={{ base: '3xl', lg: '4xl' }}>{company.companyName}</Heading>
          { company.parentCompany.data ?
          <Box display='flex'>
            <Text fontWeight='600' mr='1'>Parent Company:</Text> 
            <LinkBasic url={'/companies/' + company.parentCompany.data.attributes.slug}>
              {company.parentCompany.data.attributes.companyName}
            </LinkBasic>
          </Box> : null
          }
          <Text mb={{ base: '0', md: '0' }}><Text as='span' fontWeight='600'>Headquarters:</Text> {company.Headquarters}</Text>
          <Text mb={{ base: '0', md: '0' }}><Text as='span' fontWeight='600'>Founded:</Text> {company.yearFounded}</Text>
        </Box>
        <Rank rank={company.authorityRank} />
      </Box>
    </Box>

  )
}

export default CompanyHeading;
