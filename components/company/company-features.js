import React from "react";
import { Box, Heading, Text } from '@chakra-ui/react'

function CompanyFeatures({ features }) {
  return (
    <Box>
      <Heading as='h3' mb={2}>Features</Heading>
      <Box display='flex' flexWrap='wrap' flexDirection='column'>
        {features.map((feature, index) => {
          return (
            <Text pb={1} key={feature.attributes.featurename + '__' + index}>{feature.attributes.featureName}</Text>
          );
        })}
      </Box>
    </Box>
    )
  };
  
  export default CompanyFeatures;