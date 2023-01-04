import React from "react";
import { Box, Link, Text } from '@chakra-ui/react'
import StackItem from "./stack-item";
import Overline from "../content/typography/overline";
import StackCategory from "./stack-category";

function StackCategories({ stacks, index }) {
  return (

    <Box>
      <Box display='flex' flexWrap='wrap' alignItems='stretch' alignContent='center' mb='8'>
        <StackCategory stackCategory={'Promotion'} stacks={stacks} background={'blue.50'} flexDir={'column'}/>
        <Box>
          <StackCategory stackCategory={'Content'} stacks={stacks} background='blue.50' flexDir={'column'}/>
        </Box>
      </Box>
      <StackCategory stackCategory={'Segmentation'} stacks={stacks} background='purple.50' />
      <StackCategory stackCategory={'Data and Analytics'} stacks={stacks} background='purple.50' />    
    </Box>

  )
}

  export default StackCategories;