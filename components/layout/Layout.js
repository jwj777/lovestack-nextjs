import { Box, Container } from '@chakra-ui/react'
import Header from '/components/header/Header'
import styles from './Layout.module.css'
import { useState } from 'react'

export default function Layout({ children }) {

  const [overlay, setOverlay] = useState(false)

  const setOverlayFunc = () => {
    setOverlay((prevDisplay) => !prevDisplay)
    console.log('Header - setOverlayFunc')
  }

  const alertTest = () => {
    console.log('alertTest')
  }

  return (

    <Box className={styles.pageContainer}>
      <Box className={styles.overlay} style={{ backgroundColor: overlay ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.0)" }}>

      <Box className="header-container">
        <Header setOverlayFunc={setOverlayFunc}/>
      </Box>
      
      <Box role="main">
        <Container maxW="container.xl" mt={16}>
          { children }
        </Container>
      </Box>

      </Box>
    </Box>

  )
}
