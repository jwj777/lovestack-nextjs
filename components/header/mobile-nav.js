import { UnorderedList, ListItem, Box, Link } from '@chakra-ui/react'
import styles from './Navbar.module.css'
import MobileIcon from './mobile-icon';
import MobileNavLogoSvg from './branding/logo-mobile-nav';

function MobileNav() {

  return (

    <Box 
      className={styles.mobileNavContainer} 
      display={{base: 'absolute', md: 'none'}}
      h="100vh"
      w='100%'
      pos="fixed"
      top="0"
      left="0"
      p={6}
    >  
      <Box className={styles.mobileNavLinks} display='flex' flexDirection='column'>
        <UnorderedList styleType={'none'} ml={0}>
          <ListItem display="flex" alignItems="center">
            <Link href="/pages/categories" fontSize='xl'>Software Categories</Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>

  )
}

export default MobileNav;