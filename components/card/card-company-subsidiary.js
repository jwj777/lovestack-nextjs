import React from "react";
import { Box, Text } from '@chakra-ui/react'
import CardCompanyLink from "./card-company-link";
import Rank from "../company-lists/rank";
import CompanyIcon from "../company/company-icon";
import CardHeader from "./card-header";
import CardBody from "./card-body";

function CardCompanySubsidiary({ company }) {
  return(
    <Box width={{ base: '100%', sm: 'auto' }} mr={{ base: '0', sm: '6' }} mb='6'>
      <CardCompanyLink company={company}>
        <CardHeader>
          <Box display='flex' alignItems='center'>
            <CompanyIcon company={company} />
            <Box>
              <Text fontSize='1.4rem' fontWeight='600' mb='-3px'>{company.companyName}</Text>
              <Rank rank={company.authorityRank} />
            </Box>
          </Box>
        </CardHeader>
        <CardBody>
          <Box mb='3'>
            <Text fontSize='sm' color='gray.500'>Categories:</Text>
            {
              company.product_categories.data.map((item, index) => {
                return(
                  <Text key={index} fontWeight='500'>{item.attributes.categoryName}</Text>
                )
              })
            }
          </Box>  
          <Text><Text as='span' fontWeight='600'>Founded:</Text> {company.yearFounded}</Text>
        </CardBody>
      </CardCompanyLink>
    </Box>
  )
};

export default CardCompanySubsidiary;
