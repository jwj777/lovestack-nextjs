import { ChakraProvider } from '@chakra-ui/react'
import theme from '/theme/index'
import '../styles/globals.css'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

function MyApp({ Component, pageProps }) {

  const tagManagerArgs = {
    gtmId: 'GTM-MGFBPGM'
  }

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, []);


  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
