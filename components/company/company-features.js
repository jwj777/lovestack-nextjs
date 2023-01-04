import React from "react";
import { Box, Text, Icon } from '@chakra-ui/react'
import { FaCaretRight } from "react-icons/fa";
import SectionHeading from "../content/typography/section-headling";

function CompanyFeatures({ features, company }) {
  return (
    <Box>
      <Box mb='12' maxW='4xl'>  
        <Text fontSize='xl' fontWeight='600' mb='4'>{ features[0].attributes.featureName.length == 1 ? null : company.companyName + ' Features' }</Text>
        <Box display='flex' flexWrap='wrap' flexDir={{ base: 'column', lg: 'column' }} maxH='108px'>
          {features.map((feature, index) => {
            return (
              <Text mr='2' mb='1' fontWeight='500' key={feature.attributes.featureName + '__' + index}>
                <Icon as={FaCaretRight} w='4' h='4' mr='0' pt='1' color='blue.500'></Icon>
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
