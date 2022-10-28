import { Flex, Heading, Box, Image, LinkBox, LinkOverlay, Container, Text, Link } from '@chakra-ui/react'
import Header from '/components/header/Header'
import Companies from '../../components/companies';
import Company from '../companies/[slug]';

export default function Category({ category, companies }) {
    return (

      <div>

      <Header />

      <Flex alignItems="center" justifyContent="center">
      <Container maxW={'7xl'} flex={'1 0 auto'} py={8} mt={20}>
      
        <Heading fontSize='4xl' mb={1}>{category.attributes.categoryName}</Heading>
        <Text fontSize='lg' mt={4} mb={8}>{category.attributes.categoryDesription}</Text>

        <Box className="categoryItem" flex='1' mb={8}>

          {companies.map((item, index) => {

          return (
            <div key={index}>
            <Box className="companyItem" flex='1' mb={8}>
              <LinkBox>
                <LinkOverlay href={"/companies/" + item.attributes.slug}>
                  <Image alt={item.attributes.websiteUrl + 'homepage screenshot'}>{item.attributes.mainImage}</Image>
                  <Heading as='h2' size='lg' mb={2}>
                    <div>{item.attributes.companyName}</div> 
                  </Heading>
                  <Text>{item.attributes.websiteUrl}</Text>
                </LinkOverlay>
              </LinkBox>
            </Box>
            </div>
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
  const res = await fetch(`${process.env.API_URL}/api/product-categories`);
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
  const res = await fetch(process.env.API_URL + `/api/product-categories?[slug]=${slug}`);
  const res2 = await res.json();
  const res3 = await res2.data;
  const category = res3[0];
  
  // get companies
  const rescompanies = await fetch(process.env.API_URL + `/api/companies?filters[product_categories][slug][$eq]=${slug}`);
  const rescompaniesjson = await rescompanies.json();
  const companies = rescompaniesjson.data;

  return {
    props: { 
      companies, 
      category,
    },
    revalidate: 1,
  };
}