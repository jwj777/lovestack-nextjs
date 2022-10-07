import { Flex, Heading, Container, Text, Link } from '@chakra-ui/react'
import Header from '/components/header/Header'

export default function Article({ article }) {
    return (

      <div>

      <Header />

      <Flex alignItems="center" justifyContent="center">
      <Container maxW={'7xl'} flex={'1 0 auto'} py={8} mt={20}>
      
      <Heading fontSize='4xl' mb={1}>{article.Headline}</Heading>
      <Text fontSize='lg' mt={4} mb={8}>{article.Subheading}</Text> 
      <Text fontSize='lg' mt={4} mb={8}>{article.Body}</Text>    
  
      </Container>
      </Flex>

      </div>

    )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/api/articles');
  const data = await res.json();
  const articles = data.data;

  const paths = articles.map((item, index) => ( {
    params: {slug: item.attributes.slug}
  }));

  return {
    paths,
    fallback: false,
  };

}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`http://localhost:1337/api/articles?filters[Slug]=${slug}`);
  const res2 = await res.json();
  const res3 = res2.data;
  const article = res3[0].attributes;
  console.log(article);

  return {
    props: { article },
  };

}
