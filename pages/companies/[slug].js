import { Flex, Heading, Container, Image, Text, Link, Icon, Box, UnorderedList, ListItem } from '@chakra-ui/react'
import Header from '/components/header/Header'
import CompanyHeading from '../../components/company/company-header'
import CompanyLinks from '../../components/company/company-links'

export default function Company({ company }) {
  return (

    <div>

      <Header />

      <Flex alignItems='center' justifyContent='center'>
        <Container className="main-content" maxW={'7xl'} flex={'1 0 auto'}>

          <CompanyHeading company={company} />

          <Box display="flex">
            <Text fontSize='md' mt={4} mb={8} pr={16}>{company.companyDescription}</Text>
            <CompanyLinks company={company} />
          </Box>

        </Container>
      </Flex>

    </div>

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

  console.log(company.product_categories.data)


  console.log(company.product_categories.data[0] != undefined ?
    company.product_categories.data[0].attributes.categoryName :
    "nothing")


  return {
    props: { company },
  };

}
