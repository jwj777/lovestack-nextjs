import React from "react";
import Card from "../card";
import { Heading, Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import styles from './company-item.module.css'

function CompanyItem({ company, index }) {
  return (
  <Box key={company.companyName + '__' + index} className={styles.companyItem}>
    <LinkBox>
      <LinkOverlay href={"/companies/" + company.slug} display="flex" alignItems="center">
        <Image 
          className="list-row-item" 
          alt={'homepage screenshot'} 
          htmlWidth={'96px'} 
          src={
            company.webScreenshot.data != null ?
            company.webScreenshot.data[0].attributes.formats.thumbnail.url :
            null
          } />
        <Text fontSize="xl" fontWeight="bold" minW="200px" className={"list-row-item "}>{company.companyName}</Text>
        <Text className={"list-row-item"} minW="260px">
          {
            company.entryPriceMonthly ? 
            'Starting Monthly Price: ' + '$' + company.entryPriceMonthly : 
            null
          }
        </Text>
        
        <Text className="list-row-item" minW="240px">
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
      </LinkOverlay>
    </LinkBox>
  </Box>
  )
};

export default CompanyItem;