import { Box } from '@chakra-ui/react'
import BodyContent from '../../components/content/body-content'
import Headline1B from '../../components/content/typography/headline-1b'
import Layout from '../../components/layout/Layout'
import StackCategories from '../../components/stacks/stack-categories'

export default function Stack({ stacks }) {
  return (
      <Layout pagedata={stacks[0].attributes}>
        <Box maxW={'5xl'} mb={{ base: '10', md: '16' }} mt={{ base: '12', md: '16' }}>
          <Headline1B text={stacks[0].attributes.stackName}></Headline1B>
          <Box dangerouslySetInnerHTML={{ __html:stacks[0].attributes.stackDescription}} fontSize={{ base: 'lg', md: '2xl' }}></Box>
        </Box>
        <Box>
          <StackCategories stacks={stacks} />
        </Box>
        <Box mt='16' maxW='4xl'>
          <BodyContent text={stacks[0].attributes.stackAnalysis} />
        </Box>
      </Layout>  
  )
}

export async function getStaticPaths() {
  const res = await fetch(process.env.API_URL + `/api/stacks`);
  const resjson = await res.json();
  const categories = resjson.data;

  const paths = categories.map((item, index) => ( {
    params: {slug: item.attributes.slug}
  }));

  return {
    paths,
    fallback: false,
  };

}

export async function getStaticProps({ params }) {
  const { slug } = params;


  // get stacks
  const res = await fetch(process.env.API_URL + `/api/stacks?filters[slug]=${slug}&populate[0]=stackName
  &populate[1]=stackDescription
  &populate[2]=stackItem
  &populate[3]=stackItem.companyRef
  &populate[4]=stackItem.companyRef.product_categories
  &populate[5]=stackItem.companyRef.companyIcon
  &populate[6]=featureImage
  &populate[7]=stackAnalysis`);
  const res2 = await res.json();
  const stacks = await res2.data;
  

  return {
    props: { 
      stacks,
    },
    revalidate: 1,
  };
}
