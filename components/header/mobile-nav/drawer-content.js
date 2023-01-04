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
      <DrawerHeader backgroundColor='gray.800' display='flex'>
        <Box mt='2' ml='14'>
          <Logo />
        </Box>
        <DrawerCloseButton className='noSelect' color='white' placement='left' top='24px' left='32px'>
          <MobileIconClose />
        </DrawerCloseButton>
      </DrawerHeader>
      <DrawerBody backgroundColor='gray.800'>
        <Box display='flex' flexDirection='column'>
          <UnorderedList styleType={'none'} ml={0}>
            <ListItem display="flex" alignItems="center" mb='4'>
              <Link href="/pages/categories" color='white' fontSize='lg'>Software Categories</Link>
            </ListItem>
            <ListItem mb='4'>
              <Link href="/pages/resources" color='white' fontSize='lg'>Resources</Link>
            </ListItem>
            <ListItem>
              <Link href="/pages/about" color='white' fontSize='lg'>About</Link>
            </ListItem>
          </UnorderedList>
        </Box>        
      </DrawerBody>
    </DrawerContent>
  )
}

export default DsDrawerContent;