import { Flex, Heading, Container, Image, Text, Link, Icon, Box, UnorderedList, ListItem } from '@chakra-ui/react'
import { FaGlobe, FaTwitter } from 'react-icons/fa'
import Header from '/components/header/Header'
import CompanyHeading from '../../components/company/company-header'

export default function Company({ company }) {
  return (

    <div>

      <Header />

      <Flex alignItems='center' justifyContent='center'>
        <Container className="main-content" maxW={'7xl'} flex={'1 0 auto'}>

          <CompanyHeading company={company} />

          <Box display="flex">

          <Text fontSize='md' mt={4} mb={8} pr={16}>{company.companyDescription}</Text>

          <UnorderedList className="company-links" styleType={'none'}>
            <ListItem display="flex" alignItems="center">
              <Icon as={FaGlobe} w={4} h={4} mr={2}></Icon>
              <Link href={company.companyUrl}>{company.companyUrl}</Link>
            </ListItem>
            <ListItem>
              <Icon as={FaTwitter} w={4} h={4} mr={2}></Icon>
              <Link href={'https://www.twitter.com/' + company.twitterHandle}>{'twitter.com/' + company.twitterHandle}</Link>
            </ListItem>
          </UnorderedList>

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

  console.log(company)

  return {
    props: { company },
  };

}
