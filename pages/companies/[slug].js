import { Box } from '@chakra-ui/react'
import Layout from '../../components/layout/Layout'
import CompanyHeading from '../../components/company/company-header'
import CompanyLinks from '../../components/company/company-links/company-links'
import CompanyFeatures from '../../components/company/company-features'
import CompanyPlans from '../../components/company/company-plans/company-plans'
import CompanyBody from '../../components/company/company-body'
import CompanySubsidiaries from '../../components/company/company-hierarchy/company-subsidiaries'

export default function Company({ company, features, hasPlan, hasSubsidiary, hasCategory }) {
  return (
    <Layout>
      <Box className="main-content" maxW={'6xl'} flex={'1 0 auto'}>
        <CompanyHeading company={company} hasCategory={hasCategory} />
        <Box>
          <CompanyLinks company={company} />
          <Box mr={{ base: '0', lg: '4rem' }}>
            <CompanyBody company={company} />
            <CompanySubsidiaries company={company} hasSubsidiary={hasSubsidiary} />
            <CompanyFeatures features={features} company={company} />
            <CompanyPlans plans={company.companyPlan} hasPlan={hasPlan} />
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

  let res = await fetch(process.env.API_URL + `/api/companies?filters[slug]=${slug}&populate[0]=product_categories
    &populate[1]=features
    &populate[2]=parentCompany
    &populate[3]=subsidiaries
    &populate[4]=subsidiaries.features
    &populate[5]=subsidiaries.companyPlan
    &populate[6]=webScreenshot
    &populate[7]=companyPlan`);
  let res2 = await res.json();
  let res3 = res2.data;
  const company = res3[0].attributes;

  const resfeatures = await fetch(process.env.API_URL + `/api/features?filters[companies][slug][$eq]=${slug}&populate=*`);
  const resfeaturesjson = await resfeatures.json();
  const features = resfeaturesjson.data;


  // check if company has categories
  let hasCategory = ''
  Object.keys(company.product_categories.data).length == 0 ? hasCategory = false : hasCategory = true

  // check if company has pricing plans
  let hasPlan = ''
  company.companyPlan.length == 0 ? hasPlan = false : hasPlan = true

  // check if company has subsidiaries
  let hasSubsidiary = ''
  Object.keys(company.subsidiaries.data).length != 0 ? hasSubsidiary = true : hasSubsidiary = false

  
  return {
    props: {
      company,
      features,
      hasPlan,
      hasSubsidiary,
      hasCategory,
     },
    revalidate: 1, 
  };

}
