import React from "react";
import { Box, LinkBox, LinkOverlay, Text, Image } from "@chakra-ui/react";

const StackResource = ({ item, index }) => {
  return (
    <Box 
      key={index} 
      mb='8'
      p={{ base: '6', md: '8' }}
      boxShadow='lg'
      borderRadius='1rem'
      borderTop='1px'
      borderColor='gray.50'
      >
      <LinkBox>
        <LinkOverlay href={"/stack/" + item.attributes.slug}>
          <Image 
            src={item.attributes.featureImage.data.attributes.url}
            mb='4'
            alt={item.attributes.stackName + ' icon'}
          />
          <Text fontSize='2xl' fontWeight='700' mb='2'>
            {item.attributes.stackName}
          </Text>
          <Box dangerouslySetInnerHTML={{ __html: item.attributes.stackDescription}}></Box>
        </LinkOverlay>
      </LinkBox>
    </Box>
  )
}

export default StackResource;