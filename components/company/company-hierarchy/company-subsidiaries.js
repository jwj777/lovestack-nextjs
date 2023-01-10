import React from "react";
import { Box, Text } from '@chakra-ui/react'
import SectionHeading from "../../content/typography/section-headling";
import CardCompanySubsidiary from "../../card/card-company-subsidiary";

function CompanySubsidiaries({ company, hasSubsidiary }) {
  return (
    hasSubsidiary ?
    <Box>  
      <SectionHeading as='h2' fontWeight='600'>Subsidiaries</SectionHeading>
      <Text fontSize='lg'>More products and services from the {company.companyName} marketing ecosystem.</Text>
      <Box display='flex' flexWrap='wrap' mt='6' alignItems='stretch'>
        {company.subsidiaries.data.map((company, index) => {
          return (
            <CardCompanySubsidiary key={index} company={company.attributes}></CardCompanySubsidiary>
          );
        })}
      </Box>
    </Box> :
    null 
  )
};
  
export default CompanySubsidiaries;
