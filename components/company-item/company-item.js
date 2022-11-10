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
          ""
          } />
        <Text as='h3' className={"list-row-item " + styles.listItemName}>{company.attributes.companyName}</Text>
        <Text className="list-row-item">{
          company.attributes.entryPriceMonthly ? 
          'Entry Monthly Price: ' + '$' + company.attributes.entryPriceMonthly : 
          ""
        }</Text>
      </LinkOverlay>
    </LinkBox>
  </Box>
  )
};

export default CompanyItem;