import React from "react";
import { Box, Image } from '@chakra-ui/react'
import styles from './company.module.css'

function CompanyIcon({ company }) {
  return(

      company.companyIcon.data ?
      <Box className={styles.companyIcon} mr='4' backgroundColor='white'>
        <Image
          width={{ base: '28px', md: '28px' }}
          height={{ base: '28px', md: '28px' }}
          alt={company.companyName + ' Icon'}
          src={ company.companyIcon ?
            company.companyIcon.data.attributes.url :
            ''
          }
        />
      </Box> :
      null

  )
};

export default CompanyIcon;
