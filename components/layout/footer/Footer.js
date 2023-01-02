import Logo from '/components/header/branding/Logo'
import { Container, Box, Link } from '@chakra-ui/react'


function Footer() {
  return (
    <Box backgroundColor='black'>
      <Container maxW="container.lg">
        <Box pt={10} pb={10} display='flex' alignItems='center' flexWrap='wrap'>
          <Logo />
          <Box 
            display='flex' 
            alignItems='center' 
            mt={{ base: '2rem', lg: '0.4rem' }}
            fontSize='lg' 
            fontWeight='600'>
              <Link mr={12} color='white' href="/pages/categories">Software Categories</Link>
              <Link color='white' href="/pages/about">About</Link>
          </Box>
        </Box>  
      </Container>
    </Box>
  )
}

export default Footer;
