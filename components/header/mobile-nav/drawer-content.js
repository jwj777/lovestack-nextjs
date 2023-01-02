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


function DsDrawerContent() {

  return (
  
    <DrawerContent>
      <DrawerHeader backgroundColor='gray.900' display='flex'>
        <Box mt='2' ml='14'>
          <Logo />
        </Box>
        <DrawerCloseButton color='white' placement='left' top='24px' left='32px'>
          <MobileIcon />
        </DrawerCloseButton>
      </DrawerHeader>
      <DrawerBody backgroundColor='gray.900'>
        <Box display='flex' flexDirection='column'>
          <UnorderedList styleType={'none'} ml={0}>
            <ListItem display="flex" alignItems="center">
              <Link href="/pages/categories" color='white' fontSize='lg'>Software Categories</Link>
            </ListItem>
          </UnorderedList>
        </Box>        
      </DrawerBody>
    </DrawerContent>
  )
}

export default DsDrawerContent;