import React from "react";
import { Box, Text, Icon, Link } from '@chakra-ui/react'
import { FaCaretRight } from "react-icons/fa";
import SectionHeading from "../content/typography/section-headling";
import SectionHeadingSm from "../content/typography/section-headling-sm";

function CompanyFeaturesStructured({ features, company, companyFeatureObj }) {
  return (
    <Box>
      <Box mb='16' maxW='4xl'>  
      <SectionHeadingSm>{ company.features.data.length == 0 ? null : company.companyName + ' Software Categories and Features' }</SectionHeadingSm>
        <Box display='flex' flexWrap='wrap' mt='6' flexDir={{ base: 'column', lg: 'column' }} maxH={{ base: 'auto', md:'128px' }}>
          {companyFeatureObj.map((item, index) => {
            return (
              <Box mb='5' key={index}>
                <Link href={item.categoryUrl} mr='2' textDecor='underline' fontWeight='600'>
                  {item.category}
                </Link>
                <Box mt='2'>
                  {
                    item.features.map((item, index) => {
                      return(
                        <Text key={index}>
                          <Icon as={FaCaretRight} w='4' h='4' mr='0' pt='1' color='blue.500'></Icon>
                          {item}
                        </Text>
                      )
                    })
                  }
                </Box>

              </Box>

            )
            })
          }
        </Box>
      </Box>
    </Box>
  )
};
  
export default CompanyFeaturesStructured;
