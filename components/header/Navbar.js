import { Link, Flex, Box } from '@chakra-ui/react'
import styles from './Navbar.module.css'

export default function Navbar() {

  return (

    <Box className={styles.navbarContainer} display={{base: 'none', md: 'flex'}} fontSize='lg'>  
      <Link href="/pages/categories">Software Categories</Link>
    </Box>

  )
}