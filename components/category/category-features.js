import React from "react";
import { Box, Heading, StylesProvider, Text } from '@chakra-ui/react'

function CategoryFeatures({ features }) {
  return (
    <Box>
      {/* <Text>Features</Text>
      {features.map((feature, index) => {
        return (
          <Text key={feature.attributes.featurename + '__' + index}>{feature.attributes.featureName}</Text>
        );
      })} */}
    </Box>
    )
  };
  
  export default CategoryFeatures;