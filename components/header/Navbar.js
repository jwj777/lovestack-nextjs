import { Link, Icon, Box } from '@chakra-ui/react'
import styles from './Navbar.module.css'

export default function Navbar({ url }) {

  return (

    <Box className={styles.navbarContainer} display={{base: 'none', md: 'flex'}} justifyContent='space-between' width='100%' fontSize='lg'>  
      <Link 
        href='/pages/categories'
        fontWeight='600'
        mt='0.4rem'
        color='white'
      >
        Software Categories
      </Link>
    </Box>

  )
}