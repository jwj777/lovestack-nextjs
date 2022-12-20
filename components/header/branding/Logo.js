import { Text, Box, Link } from '@chakra-ui/react'
import LogoSvg from './Logo-svg'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <Link className={styles.logosvg} href="/" mr={12} pl={{ base: '0', md: '1.2rem' }} decoration="none">
      <Box >
        <LogoSvg />
      </Box>
    </Link>
  )
}