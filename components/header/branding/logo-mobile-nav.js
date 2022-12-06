import { Box, Link } from '@chakra-ui/react'
import LogoSvg from './Logo-svg'
import styles from '../Navbar.module.css'

export default function MobileNavLogoSvg() {
  return (

    <Link href="/" mr={16} decoration="none">
			<Box className={styles.mobileNavLogoSvg}>
				<LogoSvg />
			</Box>
    </Link>

)}