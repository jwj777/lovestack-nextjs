import { Container, Heading, Box, Text } from '@chakra-ui/react'
import Layout from '../components/layout/Layout'
import CategoryList from '../components/category/category-list'
import FeaturedCompanies from '../components/featured/featured-companies'
import DisplayLong1 from '../components/content/display-long';

export default function Home({ homepage, categoryObj, companies }) {
  return (

    <Layout>
      <Box mb={{ base: '0', md: '4rem' }} pb={4}>
        <Heading as='h1' mb={3} fontSize={{ base: '5xl', md: '7xl' }} maxW='800px'>
            {homepage.attributes.Headline}
        </Heading>
        {/* <Text className="subheading1" fontSize={{ base: 'xl', md: '3xl' }} maxW='960px'>
          {homepage.attributes.Subheading}
        </Text> */}
      </Box>
      <Container maxW="container.xl" p={0}>
        <Box 
          className='softwareContainerBg' 
          backgroundColor={{ base: '#fff', md: 'gray.50' }} 
          borderTop={{ base: '0', md: '1px' }}
          borderColor={{ base: 'gray.200', md: 'gray.300' }}
          p={{ base: '0', md: '4rem' }} 
          pt={{ base: '0', md: '3rem' }}  
          mb={{ base: '0', md: '4rem' }} 
        >
          <DisplayLong1 text={'Discover exciting new marketing software, gaps in your current marketing stack, and less expensive alternatives.'}></DisplayLong1>
          <CategoryList categoryObj={categoryObj}/>
        </Box>
      </Container>
      <Box mb={24}>
       <FeaturedCompanies companies={companies}/>
      </Box>

    </Layout>   

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


  // Sort featured companies by auth rank
  // Sort Companies by Authority Rank
  companies.sort((c1, c2) => {
    // handle null values and sort to bottom
    if (c1.attributes.authorityRank === null) {
      return 1;
    }
    if (c2.attributes.authorityRank === null) {
      return -1;
    }
    if (c1.attributes.authorityRank === c2.attributes.authorityRank) {
      return 0;
    }
    // compare non-null values
    if (c1.attributes.authorityRank > c2.attributes.authorityRank) {
      return 1 
    }
    if (c1.attributes.authorityRank < c2.attributes.authorityRank) {
      return -1
    }
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


  return {
    props: { 
      homepage, 
      categoryObj, 
      companies },
    revalidate: 10,
  };
}
