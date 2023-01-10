import React from "react";
import { Box, Text } from '@chakra-ui/react'
import CardCompanyLink from "./card-company-link";
import CompanyIcon from "../company/company-icon";
import CardHeader from "./card-header";
import CardBody from "./card-body";
import CardRankSm from "./card-rank-sm";
import styles from './card.module.css'

function CardCompanySm({ company }) {
  return(
    <Box width={{ base: '100%', sm: 'auto' }} mr={{ base: '0', sm: '6' }} mb='6' flex={{ base: '1', md: '0' }}>
      <CardCompanyLink company={company}>
        <CardHeader>
          <Box display='flex' alignItems='center'>
            <CompanyIcon company={company} />
            <Box>
              <Text fontSize='1.2rem' fontWeight='600' mb='-1px'>{company.companyName}</Text>
              <CardRankSm rank={company.authorityRank} />
            </Box>
          </Box>
        </CardHeader>
        <CardBody>
          <Box mb='3'>
            <Text fontSize='sm' fontWeight='600'>Categories</Text>
            {
              company.product_categories.data.map((item, index) => {
                return(
                  <Text key={index} fontSize='sm' className={styles.cardSmCategories}>{item.attributes.categoryName}</Text>
                )
              })
            }
          </Box>  
          <Text fontSize='sm'><Text as='span' fontSize='sm' fontWeight='600'>Founded:</Text> {company.yearFounded}</Text>
          <Text fontSize='sm'><Text as='span' fontSize='sm' fontWeight='600'>Headquarters:</Text> {company.Headquarters}</Text>
        </CardBody>
      </CardCompanyLink>
    </Box>
  )
};

export default CardCompanySm;
