import React from "react";
import Card from "../card";
import { Heading, Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import styles from './company-item.module.css'

function CompanyItem({ company, index }) {
  return (
  <Box key={company.companyName + '__' + index} className={styles.companyItem}>
    <LinkBox>
      <LinkOverlay
      href={"/companies/" + company.slug} 
      display="flex" 
      alignItems={{ base: "center", lg: "center" }} 
      justifyContent="flex-start">
        <Box>
          <Image 
            className="list-row-item" 
            alt={'homepage screenshot'} 
            maxW={{ base: '64px', md: '96px' }}
            height={{ base: '64px', md: 'auto'}}
            objectFit='cover'
            mr={{ base: 6, md: 8 }}
            src={
              company.webScreenshot.data != null ?
              company.webScreenshot.data[0].attributes.formats.thumbnail.url :
              null
            } />
        </Box>
        <Box display={{ base: "block", lg: "flex" }} alignItems='center'>
          <Text fontSize="xl" fontWeight="600" minW="180px" className={"list-row-item "}>{company.companyName}</Text>
          <Text className={"list-row-item"} minW={{ base: 'auto', lg: '260px'}}>
            {
              company.entryPriceMonthly ? 
              // 'Starting Monthly Price: ' + '$' + company.entryPriceMonthly : 
              <Box>
                <Text as='span' fontWeight='500'>{'$' + company.entryPriceMonthly}</Text><br />
                <Text as='span' fontSize='xs'>Starting Monthly Price</Text>        
              </Box> :  
              null
            }
          </Text>
          
          <Text className="list-row-item" minW={{ base: 'auto', lg: '260px'}}>
            {
              company.freeTrial ? 
              'Free Trial ' : 
              null
            }
            {
              company.freeTrial && company.freePricingTier ? 
              ', ' : 
              null
            }
            {
              company.freePricingTier ? 
              'Free Pricing Tier ' : 
              null
            }
          </Text>
        </Box>
      </LinkOverlay>
    </LinkBox>
  </Box>
  )
};

export default CompanyItem;