import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import CompanyPlan from './company-plan'
import SectionHeading from '../../content/typography/section-headling'

const CompanyPlans = ({ plans, hasPlan }) => {
  return (
    hasPlan ?
      <Box>
        <SectionHeading text='Available Plans'></SectionHeading>
        <Box className='planContainer' display='flex' flexWrap='wrap'>
          {
            plans.map((item, index) => {
              return (
              <Box key={index + '__' + item.planName}>  
                <CompanyPlan plan={item} index={index}/>
              </Box>
              )
            })
          }
        </Box>
      </Box> :
    null
  )
}



export default CompanyPlans;