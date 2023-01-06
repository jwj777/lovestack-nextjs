// Included in Layout.js (default layout). 
// Requires inputing title and meta description manually

import React from "react";
import Head from 'next/head'

const Seo = ({ pagedata }) => {
  return (

  <div>
    <Head>
      <title>{pagedata ? pagedata.pageTitle : null}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={pagedata ? pagedata.metaDescription : null} />
    </Head>
  </div>

  )
}

export default Seo;
