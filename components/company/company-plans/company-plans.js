import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import CompanyPlan from './company-plan'
import SectionHeading from '../../content/typography/section-headling'
import SectionHeadingSm from '../../content/typography/section-headling-sm'

const CompanyPlans = ({ plans, hasPlan }) => {
  return (
    hasPlan ?
      <Box>
        <SectionHeadingSm>Available Plans</SectionHeadingSm>
        <Box className='planContainer' display='flex' flexWrap='wrap' alignItems='stretch'>
          {
            plans.map((item, index) => {
              return ( 
                <CompanyPlan key={index + '__' + item.planName} plan={item} index={index}/>
              )
            })
          }
        </Box>
      </Box> :
    null
  )
}



export default CompanyPlans;