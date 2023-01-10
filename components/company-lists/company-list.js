import React from "react";
import CompanyItem from "./company-item";
import { Box } from "@chakra-ui/react";

function CompanyList({ companyArray, selectedFeature }) {
  return (  
    
    <Box>
      {
        companyArray.map((company, index) => {
          if (selectedFeature != null) {
            if (company.features.includes(selectedFeature)) {
              return (
                <CompanyItem key={index} company={company} />
              )
            }
          } 
        })   
      }
    </Box>    
  )}

export default CompanyList;