import React from "react";
import { Box, Heading, Text } from '@chakra-ui/react'
import CompanyHierarchyItem from "./company-hierarchy-item";
import Overline from "../../content/typography/overline";
import SectionHeading from "../../content/typography/section-headling";

function CompanySubsidiaries({ company, hasSubsidiary }) {
  return (
    hasSubsidiary ?
    <Box>  
      <Overline text={'More From ' + company.companyName}></Overline>
      <SectionHeading as='h2' fontWeight='600'>{company.companyName} Products and Subsidiaries</SectionHeading>
      <Box display='flex' flexWrap='wrap' mt='6'>
        {company.subsidiaries.data.map((company, index) => {
          return (
            <Box key={index + '__' + company.companyName} mb='8'>
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
