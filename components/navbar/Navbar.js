import { Link, Flex, } from '@chakra-ui/react'
import styles from './Navbar.module.css'

export default function Navbar() {

  return (

    <Flex className={styles.navbarContainer} fontSize='lg'>  
      <Link href="/categories/categories">Categories</Link>
      <Link href="/articles/insights">Insights</Link>
    </Flex>

  )
}