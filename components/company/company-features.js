import React from "react";
import { Box, Heading, StylesProvider, Text } from '@chakra-ui/react'
import styles from './company-features.module.css'

function CompanyFeatures({ features }) {
  return (
    <Box mr={12}>
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