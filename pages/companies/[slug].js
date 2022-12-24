import { Text, Box } from '@chakra-ui/react'
import Layout from '../../components/layout/Layout'
import CompanyHeading from '../../components/company/company-header'
import CompanyLinks from '../../components/company/company-links'
import CompanyFeatures from '../../components/company/company-features'
import CompanyCategories from '../../components/company/company-categories'
import CompanyPrice from '../../components/company/company-price'
import ReactMarkdown from "react-markdown";

const createMarkup = () => {
  return { __html: this.state.content };
}

export default function Company({ company, features }) {
  return (
    <Layout>
      <Box className="main-content" maxW={'6xl'} flex={'1 0 auto'}>

        <CompanyHeading company={company} />
        <Box display='flex' flexDirection={{ base: 'column', md: 'row' }}>

          <Box display={{ base: 'block', lg: 'none' }}>
            <CompanyPrice company={company} />
            <Box>
              <CompanyLinks company={company} />
            </Box>
          </Box>
          

          <Box mr={{ base: '0', lg: '4rem' }}>
            <Box className='ck-content' fontSize='md' mt={{ base: '3rem', md: '0' }} mb={12} maxW="960px">
              <ReactMarkdown source={company.companyDescription}/>
              <Box dangerouslySetInnerHTML={{ __html: company.companyDescriptionCk }}></Box>
              </Box>
            <Box display="flex" flexDir={{ base: 'column', lg: 'row' }}>
              <Box mr={{ base: '0', lg: '4rem' }} mb={8}>
                <CompanyFeatures features={features} />
              </Box>
              <Box mr={0} mb={8}>
                <CompanyCategories company={company} />
              </Box>
            </Box>  
          </Box>

          <Box display={{ base: 'none', lg: 'block' }} minW='320px' borderLeft='1px' borderColor='#ddd' pl={8}>
            <CompanyPrice company={company} />
            <Box>
              <CompanyLinks company={company} />
            </Box>
          </Box>

        </Box>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(process.env.API_URL + '/api/companies');
  const resjson = await res.json();
  const companies = resjson.data;

  const paths = companies.map((item, index) => ( {
    params: {slug: item.attributes.slug}
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(process.env.API_URL + `/api/companies?filters[slug]=${slug}&populate=*`);
  const res2 = await res.json();
  const res3 = res2.data;
  const company = res3[0].attributes;

  const resfeatures = await fetch(process.env.API_URL + `/api/features?filters[companies][slug][$eq]=${slug}&populate=*`);
  const resfeaturesjson = await resfeatures.json();
  const features = resfeaturesjson.data;

  return {
    props: {
      company,
      features,
     },
    revalidate: 1, 
  };

}
