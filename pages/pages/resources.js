import { Container, Box } from '@chakra-ui/react'
import Layout from '/components/layout/Layout'
import HeroPage from '../../components/content/hero/hero-page';
import ArticleItem from '../../components/resources/article-item';
import StackResource from '../../components/resources/stack-resource';

export default function Insights({ articles, resourcesPage, stacks }) {
  return (

    <Layout pagedata={resourcesPage.attributes}>
      <Container maxW='container.xl'>
        <HeroPage pagedata={resourcesPage} />
        <Box display='flex' flexDir={{ base: 'column', md: 'row' }}>
          <Box mr={{ base: '0', md: '8' }} mb='8' maxW='xl'>
            {
            stacks.map((item, index) => {
              return (
                <StackResource item={item} key={index} />
              )
            })
            }
          </Box>
          <Box className="articles-container" flexDirection='column'>
            {articles.map((item, index) => {
              return (
                <ArticleItem item={item} key={index} />
              );
            })}
          </Box>
        </Box>
      </Container>
    </Layout>   

  );
}

export async function getStaticProps() {

  // get articles from strapi
  const resarticles = await fetch(process.env.API_URL + '/api/articles');
  const articlesjson = await resarticles.json();
  const articles = articlesjson.data;

  // get stacks from strapi
  const resstacks = await fetch(process.env.API_URL + '/api/stacks?populate=*');
  const resstacksjson = await resstacks.json();
  const stacks = resstacksjson.data;

  // get home page from strapi
  const res = await fetch(process.env.API_URL + '/api/pages/6')
  const resjson = await res.json();
  const resourcesPage = resjson.data;
  
  return {
    props: { 
      articles, 
      resourcesPage,
      stacks,
     },
  };

}
