import React from "react";
import Head from 'next/head'

const SeoCategories = ({ pagedata }) => {
  return (

  <div>
    <Head>
      <title>{pagedata ? 'Best ' + pagedata[0].attributes.categoryName + ' Software | Ranked by demand.stack'  : null}</title>
      {/* <title>Test</title> */}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <meta name="description" content={pagedata ? pagedata.metaDescription : null} /> */}
    </Head>
  </div>

  )
}

export default SeoCategories;
