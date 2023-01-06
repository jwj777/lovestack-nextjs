import React from "react";
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

function CompanyItemImg({ company }) {
  return (
    <Box className='companyListScreenshot' display={{ base: 'none', md: 'flex' }}>
        {/* <Image  */}
      {/* // alt={'homepage screenshot'} 
      // display={{ base: 'none', md: 'block' }}
      // maxW='144px'
      // htmlWidth='144px'
      // htmlHeight='72px'
      // objectFit='cover'
      // mr={{ base: 5, md: 6 }}
      // boxShadow='md'
      // src={ */}
      {/* //   company.webScreenshot.data != null ?
      //   company.webScreenshot.data[0].attributes.formats.thumbnail.url :
      //   null
      // } /> */}
      <Image 
      alt={'homepage screenshot'} 
      width='144px'
      height='76px'
      src={
        company.webScreenshot.data != null ?
        company.webScreenshot.data[0].attributes.formats.thumbnail.url :
        null
      } />
    </Box>
  )
}

export default CompanyItemImg;