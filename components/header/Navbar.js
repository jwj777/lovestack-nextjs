import { Link, Icon, Box } from '@chakra-ui/react'
import styles from './Navbar.module.css'
import NavLink from './nav-link'

export default function Navbar() {

  return (

    <Box className={styles.navbarContainer} display={{base: 'none', md: 'flex'}} justifyContent='space-between' width='100%' fontSize='lg'>  
      <NavLink url={'/pages/categories'}>Software Categories</NavLink>
    </Box>

  )
}