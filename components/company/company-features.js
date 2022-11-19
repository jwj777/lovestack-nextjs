import React from "react";
import { Box, Heading, StylesProvider, Text } from '@chakra-ui/react'
import styles from './company-features.module.css'

function CompanyFeatures({ features }) {
  return (
    <Box className={styles.companyFeaturesContainer}>
      <Heading as='h3'>Features</Heading>
      {features.map((feature, index) => {
        return (
          <Text key={feature.attributes.featurename + '__' + index}>{feature.attributes.featureName}</Text>
        );
      })}
    </Box>
    )
  };
  
  export default CompanyFeatures;