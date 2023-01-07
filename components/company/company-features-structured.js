import React from "react";
import { Box, Text, Icon } from '@chakra-ui/react'
import { FaCaretRight } from "react-icons/fa";
import SectionHeadingSm from "../content/typography/section-headling-sm";

function CompanyFeaturesStructured({ features, company, companyFeatureObj }) {
  return (
    <Box  mb='16'>
      <Box maxW='6xl'>  
      <Box maxW={{ base: '300px', md: '100%' }}>
        <SectionHeadingSm>{ company.features.data.length == 0 ? null : company.companyName + ' Categories and Features' }</SectionHeadingSm>
      </Box>  
        <Box display='flex' flexWrap='wrap' mt='6' alignItems='stretch' >
          {companyFeatureObj.map((item, index) => {
            return (
              <Box 
                key={index}
                mb='5' 
                mr={{ base: '0', md: '6' }} 
                width={{ base: '100%', md: 'auto' }}
                backgroundColor='white' 
                boxShadow={{ base: 'md', md: 'lg' }}
                borderTop='1px'
                borderColor='gray.50'
                p='6' 
                pr='8'
                borderRadius='0.5rem'
              >
                <Text fontWeight='600' fontSize='1.1rem'>{item.category + ' Features'}</Text>
                <Box mt='3'>
                  {
                    item.features.map((item, index) => {
                      return(
                        <Text key={index} mb='2' display='flex' alignItems='center'>
                          <Icon as={FaCaretRight} w='3' h='3' mr='1' color='blue.300'></Icon>
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
