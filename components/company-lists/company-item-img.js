import React from "react";
import { Image } from '@chakra-ui/react'
import styles from './company-item.module.css'

function CompanyItemImg({ company }) {
  return (
    <Image 
    className={styles.companyItemListImage}
    alt={'homepage screenshot'} 
    // display={{ base: 'none', md: 'block' }}
    maxW={{ base: '72px', md: '144px' }}
    height={{ base: '64px', md: 'auto'}}
    objectFit='cover'
    mr={{ base: 5, md: 6 }}
    boxShadow='md'
    // border ='1px'
    // borderColor='gray.200'
    src={
      company.webScreenshot.data != null ?
      company.webScreenshot.data[0].attributes.formats.thumbnail.url :
      null
    } />
  )
}

export default CompanyItemImg;