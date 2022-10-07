import { Flex, Heading, Box, Image, LinkBox, LinkOverlay, Container, Text, Link } from '@chakra-ui/react'
import Header from '/components/header/Header'
import Companies from '../../components/companies';

import { fetchAPI } from "../../lib/api";
import Company from '../companies/[slug]';
import { stringifyQuery } from 'next/dist/server/server-route-utils';

export default function Category({ category, companies, categories }) {
    return (

      <div>

      <Header />

      <Flex alignItems="center" justifyContent="center">
      <Container maxW={'7xl'} flex={'1 0 auto'} py={8} mt={20}>
      
        <Heading fontSize='4xl' mb={1}>{category.name}</Heading>
        <Text fontSize='lg' mt={4} mb={8}>{category.desription}</Text>

        <Box className="categoryItem" flex='1' mb={8}>

          <Heading textStyle='h2' as='h2' size='lg' mb={2}>
            {category.attributes.name}
          </Heading>


          {companies.map((item, index) => {

          return (
            <Box className="companyItem" flex='1' mb={8}>
              <LinkBox>
                <LinkOverlay href={"/companies/" + item.attributes.slug}>
                  <Image>{item.attributes.mainImage}</Image>
                  <Heading as='h2' size='lg' mb={2}>
                  <div>{item.attributes.companyName}</div> 
                  </Heading>
                  <Text>{item.attributes.websiteUrl}</Text>
                </LinkOverlay>
              </LinkBox>
            </Box>
            );
          })}

        </Box>


      </Container>
      </Flex>

      </div>

    )
}

export async function getStaticPaths() {

  // get category slugs
  const res = await fetch('http://localhost:1337/api/product-categories');
  const data = await res.json();
  const categories = data.data;

  console.log(categories)

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
  const res = await fetch(`http://localhost:1337/api/product-categories?[Slug]=${slug}`);
  const res2 = await res.json();
  const res3 = res2.data;
  const category = res3[0];


  const matchingCategories = await fetchAPI("/product-categories", {
    filters: { slug: params.slug },
    populate: {
      companies: {
        populate: "*",
      },
    },
  });


  const allCategories = await fetchAPI("/product-categories");

  // get companies
  const rescompanies = await fetch(`http://localhost:1337/api/companies?filters[product_categories][slug][$eq]=${slug}`);
  const rescompaniesjson = await rescompanies.json();
  const companies = rescompaniesjson.data;
 

  return {
    props: { 
      companies, 
      categories: allCategories, 
      category: matchingCategories.data[0] 
    },
    revalidate: 1,
  };

}