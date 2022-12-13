import { Box } from '@chakra-ui/react'
import Layout from '/components/layout/Layout'
import HeroPage from '../../components/hero/hero-page';
import ReactMarkdown from "react-markdown";
import PageContent from '../../components/content/page-content';



export default function Categories({ pagedata }) {
  return (

    <Layout>
      <HeroPage pagedata={pagedata}/>
      <PageContent pagedata={pagedata} />
    </Layout>


  );
}


export async function getStaticProps() {

  // get categories page data
  const res = await fetch(`${process.env.API_URL}/api/pages?filters[slug]=about`);
  const rjson = await res.json();
  const pagedata = rjson.data[0];

  console.log(pagedata)

  return {
    props: { pagedata },
    revalidate: 10,
  };

}