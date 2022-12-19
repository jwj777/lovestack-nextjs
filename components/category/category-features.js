import React, {useState, useEffect} from "react";
import { Box, Flex, Text, Button } from '@chakra-ui/react'


function CategoryFeatures({ features, getSelectedFeature }) {

  return (
    <Box>
      <Box>
        <Text fontWeight="bold" mr={4} mb={3}>Filter by Feature: </Text>
        <Box display='flex' flexWrap='wrap'>
          {features.map((feature, index) => {
            return (
              <Button 
                mr={3}
                mb={4}
                size="sm"
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