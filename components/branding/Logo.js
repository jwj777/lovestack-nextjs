import { Text, Box, Link } from '@chakra-ui/react'
import styles from './Logo.module.css'

export default function Logo() {
  return (

    <Link href="/" mr={24}>
    <Box className={styles.logo}>

      <Text className="logo">demand<span className="logo-stack">Stack</span></Text>

    </Box>
    </Link>

  )
}