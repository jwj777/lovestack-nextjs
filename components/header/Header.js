import React from 'react'
import Logo from '/components/header/branding/Logo'
import Navbar from '/components/header/Navbar'
import MobileIcon from './mobile-nav/mobile-icon'
import { Flex, Container, Button, Drawer, DrawerOverlay } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import DsDrawerContent from './mobile-nav/drawer-content'

export default function Header({ }) {

  let { isOpen, onOpen, onClose } = useDisclosure()
  let btnRef = React.useRef()

  return (
    <Flex align='center' height='80px' zIndex='1' position='relative' background='black'>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DsDrawerContent />
      </Drawer>
      <Container maxW="container.2xl">
        <Flex align='center'>
          <Button ref={btnRef} colorScheme='blue' onClick={onOpen} pl='0' pr='0' display={{ base: 'block', md: 'none' }}>
            <MobileIcon />
          </Button>
          <Logo />
          <Navbar display={{base: 'none', md: 'flex'}} />
        </Flex>  
      </Container>
    </Flex>
  )
}
