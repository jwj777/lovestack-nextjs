import Layout from '/components/layout/Layout'
import HeroPage from '../../components/content/hero/hero-page';
import BodyContent from '../../components/content/body-content';



export default function Categories({ pagedata }) {
  return (

    <Layout>
      <HeroPage pagedata={pagedata}/>
      <BodyContent text={pagedata.attributes.Body} />
    </Layout>

  );
}


export async function getStaticProps() {

  // get categories page data
  const res = await fetch(`${process.env.API_URL}/api/pages?filters[slug]=about`);
  const rjson = await res.json();
  const pagedata = rjson.data[0];

  console.log(pagedata.attributes.Body)



  return {
    props: { pagedata },
    revalidate: 10,
  };

}