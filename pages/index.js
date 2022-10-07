import Head from 'next/head'
import { Flex, Heading, Container, Text } from '@chakra-ui/react'
import Layout from '../components/layout/Layout'
import Header from '/components/header/Header'
import headCustom from '../components/headCustom'


export default function Home({ articles, homepage }) {
  return (

    <Layout>
       
        <Heading fontSize='6xl' mb={3}>{homepage.attributes.Headline}</Heading>
        <Text fontSize='3xl' mb={8}>{homepage.attributes.Subheading}</Text>

    </Layout>   

  );
}

export async function getStaticProps() {

  // get posts from strapi
  const resarticles = await fetch('http://localhost:1337/api/articles');
  const resarticlesjson = await resarticles.json();
  const articles = resarticlesjson.data;

  // get home page from strapi
  const reshome = await fetch('http://localhost:1337/api/homepages/1')
  const reshomejson = await reshome.json();
  const homepage = reshomejson.data;
  
  return {
    props: { articles, homepage },
  };

}
