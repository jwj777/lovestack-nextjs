import React, {useState, useEffect} from "react";
import { Box, Flex, Text, Button } from '@chakra-ui/react'


function CategoryFeatures({ features, getSelectedFeature }) {

  return (
    <Box>
      <Flex align="center">
        <Text fontWeight="bold" mr={4}>Features: </Text>
        {features.map((feature, index) => {
          return (
            <Button 
                mr={4}
                size="sm"
                key={feature.attributes.featurename + '__' + index} 
                data-feature={feature.attributes.slug}
                // when button is clicked, run getSelectedFeature with feature as param
                onClick={e => getSelectedFeature(e.target.getAttribute("data-feature"))}>
                {feature.attributes.featureName}
            </Button>
          );
        })}
      </Flex>
    </Box>
    )
  };
  
  export default CategoryFeatures;