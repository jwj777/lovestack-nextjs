import { Text, Box, StylesProvider } from '@chakra-ui/react'
import Layout from '../../components/layout/Layout'
import CompanyHeading from '../../components/company/company-header'
import CompanyLinks from '../../components/company/company-links'
import CompanyFeatures from '../../components/company/company-features'
import CompanyCategories from '../../components/company/company-categories'
import CompanyPrice from '../../components/company/company-price'

export default function Company({ company, features }) {
  return (
    <Layout>
      <Box className="main-content" maxW={'6xl'} flex={'1 0 auto'}>

        <CompanyHeading company={company} />
        <Box display='flex'>
          <Box mr={16}>
            <Text fontSize='md' mt={4} mb={12} pr={8} maxW="960px">{company.companyDescription}</Text>
            <Box display="flex">
              <Box mr={16}>
                <CompanyFeatures features={features} />
              </Box>
              <Box mr={16}>
                <CompanyCategories company={company} />
              </Box>
            </Box>  
          </Box>
          <Box minW='320px' borderLeft='1px' borderColor='#ddd' pl={8}>
            { company.entryPriceMonthly ?
              <Box mr={4} mb={4}>
                <CompanyPrice company={company} />
              </Box> :
              null
            }
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
