import { Box } from '@chakra-ui/react'
import Layout from '../../components/layout/Layout'
import CompanyHeading from '../../components/company/company-header'
import CompanyLinks from '../../components/company/company-links/company-links'
import CompanyPlans from '../../components/company/company-plans/company-plans'
import CompanySubsidiaries from '../../components/company/company-hierarchy/company-subsidiaries'
import SeoCompany from '../../components/seo/seo-company'
import CompanyFeaturesStructured from '../../components/company/company-features-structured'
import BodyContent from '../../components/content/body-content'

export default function Company({ company, features, hasSubsidiary, hasCategory, hasPlan, companyFeatureObj }) {
  return (
    <Layout>
      <SeoCompany pagedata={company} />
      <Box className="main-content" maxW={'6xl'} flex={'1 0 auto'}>
        <CompanyHeading company={company} hasCategory={hasCategory} />
        <Box>
          <CompanyLinks company={company} />
          <Box mr={{ base: '0', lg: '4rem' }}>
            <Box borderBottom='1px' borderColor='gray.100' pb='1' mb='12'>
              <BodyContent text={company.companyDescriptionCk} />
            </Box>
            <CompanySubsidiaries company={company} hasSubsidiary={hasSubsidiary} />
            <CompanyFeaturesStructured features={features} company={company} companyFeatureObj={companyFeatureObj} />
            <CompanyPlans plans={company.companyPlan} hasPlan={hasPlan} />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}


// Get Static Paths

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


// Get Static Props

export async function getStaticProps({ params }) {
  const { slug } = params;

  let res = await fetch(process.env.API_URL + `/api/companies?filters[slug]=${slug}&publicationState=live&populate[0]=product_categories
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


  console.log(company.webScreenshot.data[0].attributes.formats)

  const resfeatures = await fetch(process.env.API_URL + `/api/features?filters[companies][slug][$eq]=${slug}&populate=*`);
  const resfeaturesjson = await resfeatures.json();
  const features = resfeaturesjson.data;

  // get category
  const resCat = await fetch(process.env.API_URL + `/api/product-categories?filters[companies][slug][$eq]=${slug}&populate=*`);
  const resCatJson = await resCat.json();
  const categories = await resCatJson.data;

  // Check if company has categories
  let hasCategory = ''
  Object.keys(company.product_categories.data).length == 0 ? hasCategory = false : hasCategory = true

  // check if company has pricing plans
  let hasPlan = ''
  company.companyPlan.length == 0 ? hasPlan = false : hasPlan = true

  // check if company has subsidiaries
  let hasSubsidiary = ''
  Object.keys(company.subsidiaries.data).length != 0 ? hasSubsidiary = true : hasSubsidiary = false

  // sort features alphabetically
  features.sort((f1, f2) => {
    if (f1.attributes.featureaName > f2.attributes.featureName) {
      return 1 
    }
    if (f1.attributes.featureName < f2.attributes.featureName) {
      return -1
    }
    return 0
  })


  //
  // Create Feature / Product Categories Object
  //

  let companyFeatureObj = []

  // Create Array of Companies Categories and add to Object
  // create array for later comparison
  let catCompareArray = []
  
  company.product_categories.data.map((item) => {
    let companyCategoryItem = {}
    catCompareArray.push(item.attributes.categoryName)
    // create first level of main object
    companyCategoryItem['category'] = item.attributes.categoryName
    companyCategoryItem['categoryUrl'] = item.attributes.slug
    companyFeatureObj.push(companyCategoryItem)
  })

  // Structure features and categories, and filter for the company
  let featureObj = []
  features.map((item) => {
    let featureItem = {}
    let catItems = []
    featureItem['featureName'] = item.attributes.featureName
    featureObj.push(featureItem)
    // get product categories
    item.attributes.product_categories.data.map((prodCat) => {
      // compare feature categories to company's category array
      if (catCompareArray.includes(prodCat.attributes.categoryName)) {
        catItems.push(prodCat.attributes.categoryName)
      }
      featureItem['categories'] = catItems
    })
  })

  // merge matching companies categories with features/category obj
  for (let val in companyFeatureObj) {
    let featureItems = []
    let compareCat = companyFeatureObj[val].category
    for (let val in featureObj) {
      let featureItem = []
      featureObj[val].categories.map((catItem) => {
        if (catItem == compareCat) {
          if (featureObj[val].featureName.length != null) { 
            featureItems.push(featureObj[val].featureName) 
          }
        }
      })
    }
    companyFeatureObj[val]['features'] = featureItems
  }

  return {
    props: {
      company,
      features,
      hasSubsidiary,
      hasCategory,
      hasPlan,
      companyFeatureObj,
     },
    revalidate: 1, 
  };

}
