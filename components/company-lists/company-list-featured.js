import React from "react";
import CardCompanySm from "../card/card-company-sm";
import { Box } from "@chakra-ui/react";

function CompanyListFeatured({ companyArray }) {
  return (  
    <Box display='flex' flexWrap='wrap'>
      {
        companyArray.map((company, index) => {
          if (company.featured == true) {
              return (
                <CardCompanySm key={index} company={company}></CardCompanySm>
              )
          } 
        })   
      }
      </Box>
  )
}

export default CompanyListFeatured;
