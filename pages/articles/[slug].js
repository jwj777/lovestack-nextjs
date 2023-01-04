import { Flex, Box, Container, Text } from '@chakra-ui/react'
import HeroArticle from '../../components/content/hero/hero-article';
import HeroPage from '../../components/content/hero/hero-page';
import Heading2 from '../../components/content/typography/content-heading2';
import Headline1B from '../../components/content/typography/headline-1b';
import Headline1 from '../../components/content/typography/headline1';
import Subheading1 from '../../components/content/typography/subheading1';
import Subheading2 from '../../components/content/typography/subheading2';
import Layout from '../../components/layout/Layout';
import Header from '/components/header/Header'

export default function Article({ article, createdAtShort }) {
    return (

      <Layout>
          <HeroArticle pagedata={article[0]} published={createdAtShort} />
          <Box fontSize='lg' lineHeight='1.8rem' mt='8' mb='8' maxW='5xl' dangerouslySetInnerHTML={{ __html: article[0].attributes.body}}></Box>    
      </Layout>
    )
}

export async function getStaticPaths() {
  const res = await fetch(process.env.API_URL + '/api/articles');
  const data = await res.json();
  const articles = data.data;

  const paths = articles.map((item, index) => ( {
    params: {slug: item.attributes.slug}
  }));

  return {
    paths,
    fallback: 'blocking',
  };

}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(process.env.API_URL + `/api/articles?filters[slug]=${slug}`);
  const res2 = await res.json();
  const article = res2.data;

  let date = new Date(article[0].attributes.createdAt)
  let dateDate = date.getDate();
  let options = { month: "long" }
  let dateMonth = Intl.DateTimeFormat("en-US", options).format(date);
  let dateYear = date.getFullYear();
  let createdAtShort = dateMonth + ' ' + dateDate + ', ' + dateYear

  return {
    props: { 
      article,
      createdAtShort,
     },
  };

}
