import React from "react";
import Card from "../card";
import { Heading, Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import styles from './company-item.module.css'

function CompanyItem({ company, index }) {
  return (
  <Box key={company.attributes.name + '__' + index} className={styles.companyItem}>
    <LinkBox>
      <LinkOverlay href={"/companies/" + company.attributes.slug} display="flex" alignItems="center">
        <Image 
          className="list-row-item" 
          alt={'homepage screenshot'} 
          htmlWidth={'96px'} 
          src={
            company.attributes.webScreenshot.data != null ?
            company.attributes.webScreenshot.data[0].attributes.formats.thumbnail.url :
            null
          } />
        <Text fontSize="xl" fontWeight="bold" minW="200px" className={"list-row-item "}>{company.attributes.companyName}</Text>
        <Text className={"list-row-item"} minW="260px">
          {
            company.attributes.entryPriceMonthly ? 
            'Starting Monthly Price: ' + '$' + company.attributes.entryPriceMonthly : 
            null
          }
        </Text>
        
        <Text className="list-row-item" minW="240px">
          {
            company.attributes.freeTrial ? 
            'Free Trial ' : 
            null
          }
          {
            company.attributes.freeTrial && company.attributes.freePricingTier ? 
            ', ' : 
            null
          }
          {
            company.attributes.freePricingTier ? 
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