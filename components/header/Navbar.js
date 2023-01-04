import { Link, Icon, Box } from '@chakra-ui/react'
import styles from './Navbar.module.css'

export default function Navbar({ url }) {

  return (

    <Box className={styles.navbarContainer} display={{base: 'none', md: 'flex'}} width='100%' fontSize='lg'>  
      <Link href='/pages/categories' fontWeight='500' mt='0.4rem' mr='12' color='white'>Software</Link>
      <Link href='/pages/resources' fontWeight='500' mt='0.4rem' color='white'>Resources</Link>
    </Box>

  )
}