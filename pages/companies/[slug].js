import { Flex, Heading, Container, Image, Text, Link } from '@chakra-ui/react'
import Header from '/components/header/Header'
import NextImage from "next/image";

export default function Company({ company }) {
  return (

    <div>

    <Header />

    <Flex alignItems="center" justifyContent="center">
    <Container maxW={'7xl'} flex={'1 0 auto'} py={8} mt={20}>
    
    <Heading fontSize='4xl' mb={1}>{company.companyName}</Heading>
    <Text fontSize='lg' mt={4} mb={8}>{company.companyDescription}</Text>  

    <Image
      boxSize='200px'
      objectFit='cover'
      src={process.env.API_URL + company.mainImage.data.attributes.url}
      alt={company.companyName + ' Website Homepage'}
    />

    </Container>
    </Flex>

    </div>

  )
}


export async function getStaticPaths() {
  const res = await fetch(process.env.API_URL + '/api/companies');
  const data = await res.json();
  const companies = data.data;

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

  console.log(company.mainImage.data.attributes.url)

  return {
    props: { company },
  };

}
