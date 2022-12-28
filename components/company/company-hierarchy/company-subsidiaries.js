import React from "react";
import { Box, Heading, Text } from '@chakra-ui/react'
import CompanyHierarchyItem from "./company-hierarchy-item";
import Overline from "../../content/typography/overline";

function CompanySubsidiaries({ company, hasSubsidiary }) {
  return (
    hasSubsidiary ?
    <Box mb={12}>  
      <Overline text={'More From ' + company.companyName}></Overline>
      <Heading as='h2' fontWeight='600' mb='8'>{company.companyName} Products and Subsidiaries</Heading>
      <Box>
        {company.subsidiaries.data.map((company, index) => {
          return (
            <Box key={index + '__' + company.companyName}>
              <CompanyHierarchyItem company={company.attributes} index={index} />
            </Box>
          );
        })}
      </Box>
    </Box> :
    null 
  )
};
  
export default CompanySubsidiaries;
