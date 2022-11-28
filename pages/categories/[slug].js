import { Flex, Heading, Box, Button, Container, Text, Link, filter, useRadio } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import Header from '/components/header/Header'
import CategoryFeatures from '../../components/category/category-features'
import CompanyList from '../../components/company-item/company-list'


export default function Category({ category, features, companyArray }) {

  const [selectedFeature, setSelectedFeature] = useState('all')

  const getSelectedFeature = (feature) => {
    setSelectedFeature(feature)
  }

  return (
    <div>
    <Header />
    <Flex alignItems="center" justifyContent="center">
      <Container className="main-content" maxW={'7xl'} flex={'1 0 auto'}>
        <Box maxW={'4xl'}>
          <Heading as='h1' mb={4}>{category[0].attributes.categoryName}</Heading>
          <Text mb={12}>{category[0].attributes.categoryDescription}</Text>
        </Box>

        <CategoryFeatures features={features} getSelectedFeature={getSelectedFeature} />

        <Box className="row-list company-list" flex='1' mt={8} mb={16}>
          <CompanyList companyArray={companyArray} selectedFeature={selectedFeature} />
        </Box>
      </Container>
    </Flex>
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
