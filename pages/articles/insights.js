import Head from 'next/head'
import { Flex, Heading, Box, Text, Link, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Header from '/components/header/Header'
import Layout from '/components/layout/Layout'

export default function Insights({ articles, insightsPage }) {
  return (

    <Layout>

    <Flex h={120}>
      <Heading fontSize='6xl' mb={3}>{insightsPage.attributes.headline}</Heading>
    </Flex>

    <Flex classsName="articlesContainer" flexDirection='column' maxW='container.lg'>

      {articles.map((item, index) => {
        return (
        <Box className="articleItem" flex='1' mb={8}>
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
  const resarticles = await fetch('http://localhost:1337/api/articles');
  const resarticlesjson = await resarticles.json();
  const articles = resarticlesjson.data;

  console.log(articles);

  // get home page from strapi
  const reshome = await fetch('http://localhost:1337/api/pages/1')
  const reshomejson = await reshome.json();
  const insightsPage = reshomejson.data;

  console.log(reshomejson);
  
  return {
    props: { articles, insightsPage },
  };

}
