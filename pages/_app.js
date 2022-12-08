import { ChakraProvider } from '@chakra-ui/react'
import theme from '/theme/index'
import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'
import { GTM_ID, pageview } from '../lib/gtm'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
            `,
          }}
        />
      </Head>  

      <ChakraProvider theme={theme}>

        <Component {...pageProps} />

      </ChakraProvider>
    </>

  )
}

export default MyApp
