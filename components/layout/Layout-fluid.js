import { Box, Container } from '@chakra-ui/react'
import Header from '/components/header/Header'
import styles from './Layout.module.css'
import { useState } from 'react'
import Footer from './footer/Footer'

export default function LayoutFluid({ children }) {

  const [overlay, setOverlay] = useState(false)

  const setOverlayFunc = () => {
    setOverlay((prevDisplay) => !prevDisplay)
  }

  return (

    <Box className={styles.pageContainer}>
      <Box className={styles.overlay} style={{ backgroundColor: overlay ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.0)" }}>
        <Box className="header-container">
          <Header setOverlayFunc={setOverlayFunc}/>
        </Box>
        <Box role="main" minH='72vh' mb={32}>

            { children }

        </Box>
        <Footer />
      </Box>
    </Box>

  )
}
