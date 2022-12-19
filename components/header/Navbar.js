import { Link, Icon, Box } from '@chakra-ui/react'
import styles from './Navbar.module.css'
import { HiArrowRight } from 'react-icons/hi'

export default function Navbar() {

  return (

    <Box className={styles.navbarContainer} display={{base: 'none', md: 'flex'}} justifyContent='space-between' width='100%' fontSize='lg'>  
      <Link href="/pages/categories">Software Categories</Link>
    </Box>

  )
}