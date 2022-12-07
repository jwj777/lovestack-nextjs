import React, {useState, useEffect} from "react";
import styles from '../../components/featured/featured.module.css';
import { Box, Image, LinkBox, LinkOverlay, Heading, Text } from '@chakra-ui/react'

function Featuredcompany({ company }) {
  return (

        <Box key={company.slug} className={styles.featuredCompany}>
          <LinkBox>
            <LinkOverlay href={"/companies/" + company.slug} display="flex" flexDirection={{ base: 'column', md: 'row' }} alignItems="flex-start">
              <Image 
                className={styles.featuredImage} 
                alt={'homepage screenshot'} 
                maxWidth={{ base: '200px', md: '300px' }}
                // width='100%'
                // objectFit='contain'
                mr={8}
                mb={{ base: 4, md: 0 }}
                src={
                  company.webScreenshot.data != null ?
                  company.webScreenshot.data[0].attributes.formats.large.url :
                  null
                } />
              <Box>
                <Heading as="h3" fontWeight="bold" minW="200px" mb={1}>{company.companyName}</Heading>

                  <Text mb={4}>Product Categories: &nbsp;
                    {company.product_categories.data.map((item, index) => {
                      return(<Text key={index} mr={4} as='span' fontWeight='600'>{item.attributes.categoryName}</Text>)
                    })}
                  </Text>
                
                  


                <Text minW="260px" maxW='800px'>{company.companyDescription}</Text>
              </Box>
                
            </LinkOverlay>
          </LinkBox>
        </Box>

  )
};

export default Featuredcompany;