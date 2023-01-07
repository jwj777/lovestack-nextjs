import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import CategoryFeatures from '../../components/category/category-features'
import CompanyList from '../../components/company-lists/company-list'
import DisplayLong2 from '../../components/content/typography/display-long2'
import Headline1B from '../../components/content/typography/headline-1b'
import Layout from '../../components/layout/Layout'
import SeoCategories from '../../components/seo/seo-categories'


export default function Category({ category, features, companyArray }) {

  const [selectedFeature, setSelectedFeature] = useState('all')

  const getSelectedFeature = (feature) => {
    setSelectedFeature(feature)
  }

  return (
    <div>
      <Layout>
      <SeoCategories pagedata={category} />
        <Box maxW={'5xl'} mb={{ base: '10', md: '16' }} mt={{ base: '12', md: '16' }}>
          <Headline1B text={category[0].attributes.categoryName}></Headline1B>
          <DisplayLong2 text={category[0].attributes.categoryDescription}></DisplayLong2>
        </Box>

        <CategoryFeatures features={features} getSelectedFeature={getSelectedFeature} />

        <Box className="row-list company-list" flex='1' mt={4} mb={16}>
          <CompanyList companyArray={companyArray} selectedFeature={selectedFeature} />
        </Box>
      </Layout>  
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(process.env.API_URL + `/api/product-categories`);
  const resjson = await res.json();
  const categories = resjson.data;

  const paths = categories.map((item, index) => ( {
    params: {slug: item.attributes.slug}
  }));

  return {
    paths,
    fallback: false,
  };

}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // get category
  const res = await fetch(process.env.API_URL + `/api/product-categories?filters[slug]=${slug}&populate=*`);
  const res2 = await res.json();
  const category = await res2.data;

  // get companies
  const rescompanies = await fetch(process.env.API_URL + `/api/companies?filters[product_categories][slug][$eq]=${slug}&populate=*`);
  const rescompaniesjson = await rescompanies.json();
  const companies = rescompaniesjson.data;

  // get features
  const resfeatures = await fetch(process.env.API_URL + `/api/features?filters[product_categories][slug][$eq]=${slug}&populate=*`);
  const resfeaturesjson = await resfeatures.json();
  const features = resfeaturesjson.data;


  // Sort Companies by Authority Rank
  companies.sort((c1, c2) => {
    // handle null values and sort to bottom
    if (c1.attributes.authorityRank === null) {
      return 1;
    }
    if (c2.attributes.authorityRank === null) {
      return -1;
    }
    if (c1.attributes.authorityRank === c2.attributes.authorityRank) {
      return 0;
    }
    // compare non-null values
    if (c1.attributes.authorityRank < c2.attributes.authorityRank) {
      return 1 
    }
    if (c1.attributes.authorityRank > c2.attributes.authorityRank) {
      return -1
    }
    return 0
  })


  // Sort Features, First by Weight, and then by featureName
  features.sort((f1, f2) => {
    if (f1.attributes.Weight > f2.attributes.Weight) {
      if (f1.attributes.featureaName > f2.attributes.featureName) {  
        return 1 
      }
      if (f1.attributes.featureName < f2.attributes.featureName) {
        return -1
      }
      return 0
    }
    if (f1.attributes.Weight == null && f2.attributes.Weight == null) {
      if (f1.attributes.featureaName > f2.attributes.featureName) {
        return 1 
      }
      if (f1.attributes.featureName < f2.attributes.featureName) {
        return -1
      }
      return 0
    }  
  })


  // Transform companies object to make it easier to manage in JSX
  const companyArray = []
  // map companies object
  companies.map((item, index) => {
    let companyFeatureSlug = item.attributes
    let companyFeatureName = item.attributes
    console.log(item.attributes.companyPlan.length)
    let featuresSlugArray = []
    let featuresNameArray = []
    let featureAttr = item.attributes.features.data
    // iterate through individual features
    for (let val in featureAttr) {
      let featureData = featureAttr[val].attributes
      featuresSlugArray.push(featureData.slug)
      featuresNameArray.push(featureData.featureName)
    }
    // add 'all' feature by default 
    featuresSlugArray.push('all')
    // create objects from arrays
    companyFeatureSlug['features'] = featuresSlugArray
    companyFeatureName['featureNameArray'] = featuresNameArray
    // push individual company object to company array
    companyArray.push(companyFeatureSlug)
  })


  return {
    props: { 
      companies, 
      category,
      features,
      companyArray,
    },
    revalidate: 1,
  };
}
