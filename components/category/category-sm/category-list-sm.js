import React from "react";
import { Box } from '@chakra-ui/react'
import CategoryItemSm from "./category-item-sm";


export default function CategoryListSm({ categoryObj }) {
  return (

  <Box display='flex' flexWrap='wrap'> 
    {categoryObj.map((item, index) => {
      return(
        <CategoryItemSm item={item} key={index} />
      )
    })}
  </Box>

  )}