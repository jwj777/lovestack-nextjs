import Head from 'next/head'
import { Flex, Heading, Box, Text, Link, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Header from '/components/header/Header'
import Layout from '/components/layout/Layout'

export default function Insights({ articles, insightsPage }) {
  return (

    <Layout>

    <Heading as='h1' mb={3}>{insightsPage.attributes.Headline}</Heading>

    <Flex className="articles-container" flexDirection='column' maxW='container.lg'>
      {articles.map((item, index) => {
        return (
        <Box key={index} className="articleItem" flex='1' mb={8}>
          <LinkBox>
            <LinkOverlay href={"/articles/" + item.attributes.slug}>
              <Heading as='h2' size='lg' mb={2}>
                {item.attributes.Headline}
              </Heading>
              <Text className="subheading">{item.attributes.Subheading}</Text>
            </LinkOverlay>
          </LinkBox>
        </Box>
        );
      })}
    </Flex>

    </Layout>   

  );
}

export async function getStaticProps() {

  // get posts from strapi
  const resarticles = await fetch(process.env.API_URL + '/api/articles');
  const articlesjson = await resarticles.json();
  const articles = articlesjson.data;

  // get home page from strapi
  const reshome = await fetch(process.env.API_URL + '/api/pages/1')
  const reshomejson = await reshome.json();
  const insightsPage = reshomejson.data;
  
  return {
    props: { articles, insightsPage },
  };

}
