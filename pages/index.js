import { Container, Heading, Box, Text } from '@chakra-ui/react'
import CategoryList from '../components/category/category-list'
import DisplayLong1 from '../components/content/typography/display-long';
import Layout from '../components/layout/Layout';
import HeroPageHome from '../components/content/hero/hero-page-home';
import CompanyListFeatured from '../components/company-lists/company-list-featured';
import Overline from '../components/content/typography/overline';
import LayoutHome from '../components/layout/layout-home';

export default function Home({ homepage, categoryObj, companyArray }) {
  return (

    <LayoutHome pagedata={homepage.attributes}>
      <Box mb={24}>
        <Box 
          className='softwareContainerBg' 
          pt={{ base: '8', md: '16' }}
          mb={{ base: '0', md: '4rem' }} 
        >
          <Box mt='8' mb='14'>
            <Overline text={'Software Categories'}></Overline>
            <DisplayLong1 text={'Find best in class tools for data, segmentation, content and promotion.'}></DisplayLong1>
          </Box>
          <CategoryList categoryObj={categoryObj}/>
        </Box>
      </Box>

      <Box mb={24}>
        <Box maxW='container.xl' mb='12'>
          <Overline text={'Featured Companies'}></Overline>
          <DisplayLong1 text='Great marketing software that deserves more attention'></DisplayLong1>
        </Box>
        <Box maxW='container.xl'>
          <CompanyListFeatured companyArray={companyArray} />
        </Box>
      </Box>
    </LayoutHome>   

  );
}

export async function getStaticProps() {

  // get home page from strapi
  const reshome = await fetch(process.env.API_URL + '/api/homepages/1')
  const reshomejson = await reshome.json();
  const homepage = reshomejson.data;

  // get featured companies
  const rescompanies = await fetch(process.env.API_URL + `/api/companies?filters[featured][$eq]=true&populate=*`);
  const rescompaniesjson = await rescompanies.json();
  const companies = rescompaniesjson.data;

  // get parent categories from strapi
  const resparent = await fetch(`${process.env.API_URL}/api/product-categories?populate=*&filters[child_categories][slug][$notNull]=content`);
  const resparentjson = await resparent.json();
  const parent_categories = resparentjson.data;


  // Sort Companies by Authority Rank
  companies.sort((c1, c2) => {
    // handle null values and sort to bottom
    if (c1.attributes.authorityRank === null) { return 1; }
    if (c2.attributes.authorityRank === null) { return -1; }
    if (c1.attributes.authorityRank === c2.attributes.authorityRank) { return 0; }
    // compare non-null values
    if (c1.attributes.authorityRank > c2.attributes.authorityRank) { return 1 }
    if (c1.attributes.authorityRank < c2.attributes.authorityRank) { return -1 }
    return 0
  })

  // Check if an item is an object
  const isObject = function(val) {
    if (val === null) {
      return false;
    }
    return (typeof val === 'object');
  }

  let parentObj = []
  // Find objects that have child categories
  function getChildCategories(obj) {
    let parentItem = {}
    let childItem = {}
    for (let val in obj) {
      if ((isObject(obj[val])) && (obj[val] !== undefined)) {
        let parentAttrObj = obj[val].attributes
        // Create Parent Object Items Here
        parentItem['categoryNameParent'] = parentAttrObj.categoryName
        parentItem['categorySlugParent'] = parentAttrObj.slug
        parentItem['categorySubheadingParent'] = parentAttrObj.Subheading
        if (parentAttrObj.Weight) {
          parentItem['categoryWeightParent'] = parentAttrObj.Weight
          
        }
        let childCategories = []
        for (let val in parentAttrObj) {
          if (val == 'child_categories') {
            parentAttrObj[val].data.map((item, index) => {
              // Create child object items
              childItem['categoryNameChild'] = item.attributes.categoryName
              childItem['categorySlugChild'] = item.attributes.slug
              // Nest childCategory in parentItem
              childCategories.push(childItem)
              parentItem['childCategories'] = childCategories
              childItem = {}
            })
            childItem['categoryNameChild'] = null
            childItem['categorySlugChild'] = null    
          }        
        }
        parentObj.push(parentItem)
        parentItem = {}
      }
    }
    return(parentObj)
  }



  // Creat variable to use in props
  const categoryObj = getChildCategories(parent_categories)


  // Sort Parent Categories
  categoryObj.sort((c1, c2) => {
    // handle null values and sort to bottom
    if (c1.categoryWeightParent === null) {
      return 1;
    }
    if (c2.categoryWeightParent === null) {
      return -1;
    }
    if (c1.categoryWeightParent === c2.categoryWeightParent) {
      return 0;
    }
    // compare non-null values
    if (c1.categoryWeightParent > c2.categoryWeightParent) {
      return 1 
    }
    if (c1.categoryWeightParent < c2.categoryWeightParent) {
      return -1
    }
    return 0
  })


  // Sort Child Categories
  categoryObj.map((parentCat, index) => {
    parentCat.childCategories.sort((a, b) => a.categoryNameChild.localeCompare(b.categoryNameChild))
  })



  // Transform companies object to make it easier to manage in JSX
  const companyArray = []
  const companyFeatureSlug = {}
  const companyFeatureName = {}
  // map companies object from fetch 
  companies.map((item, index) => {
    let companyFeatureSlug = item.attributes
    let companyFeatureName = item.attributes
    let featuresSlugArray = []
    let featuresNameArray = []
    let featureAttr = item.attributes.features.data
    // iterate through individual features
    for (let val in featureAttr) {
      let featureData = featureAttr[val].attributes
      featuresSlugArray.push(featureData.slug)
      featuresNameArray.push(featureData.featureName)
    }
    // add 'all' feature by default 
    featuresSlugArray.push('all')
    // create objects from arrays
    companyFeatureSlug['features'] = featuresSlugArray
    companyFeatureName['featureNameArray'] = featuresNameArray
    // push individual company object to company array
    companyArray.push(companyFeatureSlug)
  })

  console.log(homepage)

  // companyArray.map((item) => {
  //   if (item.Headline = 'Modernize Your Marketing Technology Stack') {
  //     console.log(item.companyName)
  //   }
  // })


  // Sort featured companies by auth rank
  companyArray.sort((c1, c2) => {
    // handle null values and sort to bottom
    if (c1.authorityRank === null) { return 1; }
    if (c2.authorityRank === null) { return -1; }
    if (c1.authorityRank === c2.authorityRank) { return 0; }
    // compare non-null values
    if (c1.authorityRank < c2.authorityRank) { return 1 }
    if (c1.authorityRank > c2.authorityRank) { return -1 }
    return 0
  })
  

  return {
    props: { 
      homepage, 
      categoryObj, 
      companies,
      companyArray 
    },
    revalidate: 10,
  };
}
