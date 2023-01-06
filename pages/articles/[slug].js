import { Flex, Box, Container, Text } from '@chakra-ui/react'
import BodyContent from '../../components/content/body-content';
import HeroArticle from '../../components/content/hero/hero-article';
import Layout from '../../components/layout/Layout';

export default function Article({ article, createdAtShort }) {
    return (

      <Layout>
          <HeroArticle pagedata={article[0]} published={createdAtShort} />
          <BodyContent text={article[0].attributes.body} />    
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
