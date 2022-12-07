import Logo from '/components/header/branding/Logo'
import { Container, Box, Link } from '@chakra-ui/react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <Box className={styles.footerContainer}>
      <Container maxW="container.xl">
        <Box pt={10} pb={10} display='flex' alignItems='center' flexWrap='wrap'>
          <Logo />
          <Box 
            className={styles.footerNav} 
            display='flex' 
            alignItems='center' 
            mt={{ base: '2rem', lg: '0.4rem' }}
            fontSize='lg' 
            fontWeight='600'>
            <Link href="/pages/categories">Software Categories</Link>
          </Box>
        </Box>  
      </Container>
    </Box>
  )
}

export default Footer;
