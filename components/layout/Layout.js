import { Box, Container, Text } from '@chakra-ui/react'
import Header from '/components/header/Header'
import styles from './Layout.module.css'
import { useState } from 'react'
import Footer from './footer/Footer'
import Seo from '../seo/seo'
import SeoCategories from '../seo/seo-categories'

export default function Layout({ children, pagedata }) {

  const [overlay, setOverlay] = useState(false)

  const setOverlayFunc = () => {
    setOverlay((prevDisplay) => !prevDisplay)
  }

  return (

    <Box className={styles.pageContainer}>
      <Seo pagedata={pagedata} />
      <Box className={styles.overlay} style={{ backgroundColor: overlay ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.0)" }}>
        <Box className="header-container">
          <Header setOverlayFunc={setOverlayFunc}/>
        </Box>
        <Box role="main" minH='72vh' mb={24}>
          <Container maxW="container.xl">
            { children }
          </Container>
        </Box>
        <Footer />
      </Box>
    </Box>

  )
}
