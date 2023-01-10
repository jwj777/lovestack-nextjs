import React from "react";
import { Box } from '@chakra-ui/react'
import CategoryItemSm from "./category-item-sm";


export default function CategoryListSm({ categoryObj }) {
  return (

  <Box display='flex'> 
    {categoryObj.map((item, index) => {
      return(
        <CategoryItemSm item={item} key={index} />
      )
    })}
  </Box>

  )}