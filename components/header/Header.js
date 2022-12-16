import Logo from '/components/header/branding/Logo'
import Navbar from '/components/header/Navbar'
import styles from './Header.module.css'
import MobileIcon from './mobile-icon'
import { Flex, Container, Button } from '@chakra-ui/react'
import MobileNav from './mobile-nav'
import {useState} from 'react'

export default function Header({ setOverlayFunc }) {

  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen)
    setOverlayFunc()
  }

  return (
    <Flex align='center'  className={styles.headerContainer}>
      <Container maxW="container.2xl" borderBottom='1px' borderColor='gray.200' pt={8} pb={8}>
        <Flex align='center' >

          {mobileOpen && <MobileNav toggleMobile={toggleMobile} />}
          <MobileIcon toggleMobile={toggleMobile} />   
      
          <Logo />
          <Navbar display={{base: 'none', md: 'flex'}} />

          {/* <Button onClick={toggleMobile}>test</Button> */}

        </Flex>  
      </Container>
    </Flex>
  )
}
