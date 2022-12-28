import React from 'react'
import { Box, Headin, Text } from '@chakra-ui/react'
import CompanyItemPlan from './company-item-plan'


const CompanyItemPlans = ({ plans }) => {
  return (
    <Box>
      <Box display='flex' flexWrap='wrap'>
        {
          plans.map((item, index) => {
            if (index <= 1 && item.planPrice) {
              return (
                <Box key={index}>
                  <CompanyItemPlan plan={item} />
                </Box>
              )
            }
          })
        }
      </Box>
    </Box>
  )
}



export default CompanyItemPlans;