import { Box, Image, LinkBox, LinkOverlay, Heading, Text } from '@chakra-ui/react'

function FeaturedItem({ company }) {
  return (

    <Box 
      key={company.slug} 
      borderTop='1px'
      borderColor='gray.400'
      pt={8}
      pb={4}
      mt={0}>
      <LinkBox>
        <LinkOverlay href={"/companies/" + company.slug} display="flex" flexDirection={{ base: 'column', md: 'row' }} alignItems="flex-start">
          <Image 
            alt={'homepage screenshot'} 
            maxWidth={{ base: '100%', md: '180px' }}
            mr={8}
            mb={{ base: '1rem', md: '0'}}
            src={
              company.webScreenshot.data != null ?
              company.webScreenshot.data[0].attributes.formats.large.url :
              null
            } />
          <Box>
            <Heading as="h3" fontWeight="bold" minW="200px" mt={0} mb={1}>{company.companyName}</Heading>
            <Text mb={{ base: '1rem', md: '0'}}>
              dRank: <Text as='span' color='orange.400' fontWeight='700'>{company.authorityRank}</Text>
            </Text>
            <Box display='flex' alignItems='center' flexWrap={{ base: 'wrap', md: 'nowrap' }}>
              <Text mr={3}>Product Categories: </Text>
              <Box display='flex' alignItems='center'>
                {company.product_categories.data.map((item, index) => {
                  return(<Text key={index} mr={4} as='span' fontWeight='600'>{item.attributes.categoryName}</Text>)
                })}
              </Box>
            </Box>
          </Box>
            
        </LinkOverlay>
      </LinkBox>
    </Box>

  )
};

export default FeaturedItem;