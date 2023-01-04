import React from "react";
import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";

const ArticleItem = ({ item, index }) => {
  return (
    <Box 
      key={index} 
      className="articleItem"
      mb='8'
      p='8'
      pt='6'
      boxShadow='lg'
      borderRadius='1rem'
      borderTop='1px'
      borderColor='gray.50'
    >
      <LinkBox>
        <LinkOverlay href={"/articles/" + item.attributes.slug}>
          <Text fontSize='2xl' fontWeight='700' mb='2'>
            {item.attributes.Headline}
          </Text>
          <Text className="subheading">{item.attributes.Subheading}</Text>
        </LinkOverlay>
      </LinkBox>
    </Box>
  )
}

export default ArticleItem;