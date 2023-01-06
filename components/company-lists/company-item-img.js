import React from "react";
import { Image } from '@chakra-ui/react'

function CompanyItemImg({ company }) {
  return (
    <Image 
    alt={'homepage screenshot'} 
    display={{ base: 'none', md: 'block' }}
    maxW='144px'
    htmlWidth='144px'
    htmlHeight='72px'
    objectFit='cover'
    mr={{ base: 5, md: 6 }}
    boxShadow='md'
    src={
      company.webScreenshot.data != null ?
      company.webScreenshot.data[0].attributes.formats.thumbnail.url :
      null
    } />
  )
}

export default CompanyItemImg;