import React from "react";
import { Box, Text, Button } from '@chakra-ui/react'


function CategoryFeatures({ features, getSelectedFeature }) {

  return (
    <Box>
      <Box maxW='6xl'>
        <Text fontWeight="bold" fontSize='md' mr={4} mb={3}>Filter by Feature</Text>
        <Box display='flex' flexWrap='wrap'>
          {features.map((feature, index) => {
            return (
              <Button 
                mr={3}
                mb={4}
                size="sm"
                lineHeight='0'
                key={feature.attributes.featurename + '__' + index} 
                data-feature={feature.attributes.slug}
                // when button is clicked, run getSelectedFeature with feature as param
                onClick={e => getSelectedFeature(e.target.getAttribute("data-feature"))}>
                {feature.attributes.featureName}
              </Button>
            );
          })}
        </Box>
      </Box>
    </Box>
    )
  };
  
  export default CategoryFeatures;