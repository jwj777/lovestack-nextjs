import { Flex, Heading, Container, Image, Text, Link, Icon, Box, UnorderedList, ListItem } from '@chakra-ui/react'
import Header from '/components/header/Header'
import CompanyHeading from '../../components/company/company-header'
import CompanyLinks from '../../components/company/company-links'
import CompanyFeatures from '../../components/company/company-features'

export default function Company({ company, features }) {
  return (

    <Box>

      <Header />

      <Flex alignItems="center" justifyContent="center">
      <Box className="main-content" maxW={'6xl'} flex={'1 0 auto'}>

        <CompanyHeading company={company} />

        <Box className="company-content-container">
            <Text fontSize='md' mt={4} mb={8} pr={16} maxW="960px">{company.companyDescription}</Text>
            <Box className="company-details" display="flex">
              <CompanyFeatures features={features} />
              <CompanyLinks company={company} />
            </Box>  
        </Box>

      </Box>

      </Flex>

    </Box>

  )
}


export async function getStaticPaths() {
  const res = await fetch(process.env.API_URL + '/api/companies');
  const resjson = await res.json();
  const companies = resjson.data;

  const paths = companies.map((item, index) => ( {
    params: {slug: item.attributes.slug}
  }));

  return {
    paths,
    fallback: false,
  };

}


export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(process.env.API_URL + `/api/companies?filters[slug]=${slug}&populate=*`);
  const res2 = await res.json();
  const res3 = res2.data;
  const company = res3[0].attributes;

  const resfeatures = await fetch(process.env.API_URL + `/api/features?filters[companies][slug][$eq]=${slug}&populate=*`);
  const resfeaturesjson = await resfeatures.json();
  const features = resfeaturesjson.data;

  console.log(features)

  return {
    props: { 
      company,
      features,
     },
  };

}
