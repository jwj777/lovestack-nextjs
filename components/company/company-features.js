import React from "react";
import { Box, Heading, Text, Icon } from '@chakra-ui/react'
import { FaCaretRight } from "react-icons/fa";
import SectionHeading from "../content/typography/section-headling";

function CompanyFeatures({ features, company }) {
  return (
    <Box>
      <Box mb='12' maxW='4xl'>  
        <SectionHeading text={ features.length == 0 ? null : company.companyName + ' Features' }></SectionHeading>
        <Box display='flex' flexWrap='wrap' flexDir={{ base: 'column', lg: 'row' }}>
          {features.map((feature, index) => {
            return (
              <Text pb={1} mr='4' fontWeight='500' key={feature.attributes.featurename + '__' + index}>
                <Icon as={FaCaretRight} w={4} h={4} mr='0' pt='1' color='blue.500'></Icon>
                {feature.attributes.featureName}
              </Text>
            );
          })}
        </Box>
      </Box>
    </Box>
  )
};
  
export default CompanyFeatures;
