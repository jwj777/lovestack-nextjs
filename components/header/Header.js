import Logo from '/components/branding/Logo'
import Navbar from '/components/navbar/Navbar'
import styles from './Header.module.css'
import { Flex, Container } from '@chakra-ui/react'

export default function Header() {
  return (

    <Flex align='center' p={8} className={styles.headerContainer}>
    <Container maxW="container.xl">
    <Flex align='center'>
      
      <Logo />
      <Navbar />

    </Flex>  
    </Container>
    </Flex>

  )
}
