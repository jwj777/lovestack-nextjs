import React from 'react'
import { Box, Headin, Text } from '@chakra-ui/react'
import CompanyItemPlan from './company-item-plan'
import CompanyItemPlanMobile from './company-item-plan-mobile'


const CompanyItemPlans = ({ plans }) => {
  return (
    <Box width={{ base: '100%', md: 'auto' }}>
      <Box display={{ base: 'block', md: 'flex' }} flexWrap='wrap'>
        {
          plans.map((item, index) => {
            if (index <= 1 && item.planPrice) {
              return (
                <Box key={index}>
                  <Box display={{ base: 'none', md: 'block' }}>
                    <CompanyItemPlan plan={item} />
                  </Box>
                  <Box key={index} display={{ base: 'block', md: 'none' }}>
                    <CompanyItemPlanMobile plan={item} />
                  </Box>
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