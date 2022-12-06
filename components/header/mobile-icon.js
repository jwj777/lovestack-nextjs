import { Icon, Link, StylesProvider } from '@chakra-ui/react'
import { RiMenu2Line } from 'react-icons/ri'
import styles from './Navbar.module.css'

function MobileIcon({ toggleMobile, setOverlayFunc }) {
  return (
    <Link className={styles.mobileIcon} href="#">
      <Icon
        onClick={() => toggleMobile()} 
        display={{base: 'flex', md: 'none'}} 
        as={RiMenu2Line} w={8} h={8} mr={8}>
      </Icon>
    </Link>
  )
}
export default MobileIcon;