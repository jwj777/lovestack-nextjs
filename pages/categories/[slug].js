import { Flex, Heading, Box, Container, Text, Link, filter, useRadio } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import Header from '/components/header/Header'
import CategoryFeatures from '../../components/category/category-features'
import CompanyList from '../../components/company-item/company-list'
import HeadlineMain from '../../components/headline/headline-main'
import Layout from '../../components/layout/Layout'


export default function Category({ category, features, companyArray }) {

  const [selectedFeature, setSelectedFeature] = useState('all')

  const getSelectedFeature = (feature) => {
    setSelectedFeature(feature)
  }

  return (
    <div>
      <Layout>
        <Box maxW={'4xl'}>
          <Heading as='h1' fontSize={{ base: '4xl', md: '5xl' }} mb={4}>{category[0].attributes.categoryName}</Heading>
          <Text mb={12}>{category[0].attributes.categoryDescription}</Text>
        </Box>

        <HeadlineMain item={category[0]} headlinevalue={'categoryName'} subheadvalue={'categoryDescription'} />

        <CategoryFeatures features={features} getSelectedFeature={getSelectedFeature} />

        <Box className="row-list company-list" flex='1' mt={8} mb={16}>
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

  const featuresSort = features


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


  //
  // Transform companies object to make it easier to manage in JSX
  //
  const companyArray = []
  const companyObj = {}
  // map companies object from fetch 
  companies.map((item, index) => {
    let companyObj = item.attributes
    let featureArray = []
    let featureAttr = item.attributes.features.data
    // iterate through individual features
    for (let val in featureAttr) {
      let featureSlugs = featureAttr[val].attributes
      featureArray.push(featureSlugs.slug)
    }
    featureArray.push('all')
    // add feature array to individual company object
    companyObj['features'] = featureArray
    // push individual company object to company array
    companyArray.push(companyObj)
    // console.log(companyArray)
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
