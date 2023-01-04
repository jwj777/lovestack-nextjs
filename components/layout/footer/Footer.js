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
            flexDir={{ base: 'column', md: 'row' }}
            justifyContent='flex-start'
            mt={{ base: '2rem', lg: '1.2rem' }}
            fontSize='lg' 
            fontWeight='400'>
              <Link mr={{ base: '0', md: '12' }} mb='4' color='white' href="/pages/categories">Software Categories</Link>
              <Link mr={{ base: '0', md: '12' }} mb='4' color='white' href="/pages/resources">Resources</Link>
              <Link color='white' href="/pages/about">About</Link>
          </Box>
        </Box>  
      </Container>
    </Box>
  )
}

export default Footer;
