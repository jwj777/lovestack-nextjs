import React from 'react'
import Logo from '../branding/Logo';
import MobileIcon from './mobile-icon';
import {
  Box,
  UnorderedList,
  ListItem,
  Link,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import MobileIconClose from './mobile-icon-close';


function DsDrawerContent() {

  return (
  
    <DrawerContent>
      <DrawerHeader backgroundColor='gray.800' display='flex' border='0'>
        <Box mt='0.6rem' ml='12'>
          <Logo />
        </Box>
        <DrawerCloseButton className='noSelect' color='white' placement='left' top='24px' left='32px'>
          <MobileIconClose />
        </DrawerCloseButton>
      </DrawerHeader>
      <DrawerBody backgroundColor='gray.800'>
        <Box display='flex' flexDirection='column'>
          <UnorderedList styleType={'none'} ml={0}>
            <ListItem mb='6'>
              <Link href="/pages/categories" color='white' fontSize='lg'>Software Categories</Link>
            </ListItem>
            <ListItem mb='6'>
              <Link href="/pages/resources" color='white' fontSize='lg'>Resources</Link>
            </ListItem>
            <ListItem mb='6'>
              <Link href="/pages/about" color='white' fontSize='lg'>About</Link>
            </ListItem>
          </UnorderedList>
        </Box>        
      </DrawerBody>
    </DrawerContent>
  )
}

export default DsDrawerContent;