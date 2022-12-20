import React from "react";
import { Text } from '@chakra-ui/react'
import CompanyItem from "./company-item";


function CompanyListFeatured({ companyArray }) {
  return (  
    
    companyArray.map((company, index) => {
      if (company.featured == true) {
          return (
            <CompanyItem key={index} company={company} />
          )
      } 
    })   

  )}

export default CompanyListFeatured;