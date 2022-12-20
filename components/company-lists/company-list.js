import React from "react";
import { Heading, Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import CompanyItem from "./company-item";


function CompanyList({ companyArray, selectedFeature }) {
  return (  
    
    companyArray.map((company, index) => {
      if (selectedFeature != null) {
        if (company.features.includes(selectedFeature)) {
          return (
            <CompanyItem key={index} company={company} />
          )
        }
      } 
    })       
  )}

export default CompanyList;