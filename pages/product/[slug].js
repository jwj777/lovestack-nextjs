import { Flex, Heading, Container, Text, Link } from '@chakra-ui/react'

export default function Article({ product }) {
    return (

    <Flex alignItems="center" justifyContent="center">
    <Container maxW={'7xl'} flex={'1 0 auto'} py={8} mt={20}>
    
    <Heading fontSize='4xl' mb={1}>{product.company}</Heading>
    <Link href={product.websiteUrl} fontSize='xl'>{product.websiteUrl}</Link>
    <Text fontSize='lg' mt={4} mb={8}>{product.productDescription}</Text>    

    </Container>
    </Flex>

  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/api/products');
  const data = await res.json();
  const products = data.data;
  console.log(products);

  const paths = products.map((item, index) => ( {
    params: {slug: item.attributes.slug}
  }));

  return {
    paths,
    fallback: false,
  };

}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`http://localhost:1337/api/products?filters[Slug]=${slug}`);
  const res2 = await res.json();
  const res3 = res2.data;
  const product = res3[0].attributes;

  return {
    props: { product },
  };

}
