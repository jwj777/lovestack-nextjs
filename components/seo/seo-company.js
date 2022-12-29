import React from "react";
import Head from 'next/head'

const SeoCompany = ({ pagedata }) => {
  return (

  <div>
    <Head>
      <title>{pagedata ? pagedata.companyName + ' Software Features and Ranking' + ' | demand.stack' : null}</title>
      {/* <title>Test</title> */}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={pagedata ? pagedata.metaDescription : null} />
    </Head>
  </div>

  )
}

export default SeoCompany;