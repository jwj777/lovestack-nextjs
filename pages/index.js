import { Heading, Box, Text } from '@chakra-ui/react'
import Layout from '../components/layout/Layout'
import CategoryList from '../components/category/category-list'
import FeaturedCompanies from '../components/featured/featured-companies'

export default function Home({ homepage, categoryObj, companies }) {
  return (

    <Layout>
      <Box mb={28}>
        <Heading as='h1' mb={3} fontSize={{ base: '4xl', md: '6xl' }} maxW='960px'>
            {homepage.attributes.Headline}
        </Heading>
        <Text className="subheading1" fontSize={{ base: 'xl', md: '3xl' }} maxW='960px'>
          {homepage.attributes.Subheading}
        </Text>
      </Box>
      <Box mb={24}>
       <FeaturedCompanies companies={companies}/>
      </Box>
      <Box>
        <Heading as="h2" mb={8}>Software Categories</Heading>
        <CategoryList categoryObj={categoryObj}/>
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
        // Create Parent Object Items
        parentItem['categoryNameParent'] = parentAttrObj.categoryName
        parentItem['categorySlugParent'] = parentAttrObj.slug
        if (parentAttrObj.Weight) {
          parentItem['categoryWeightParent'] = parentAttrObj.Weight
          
        }
        // Create Child Object
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

  return {
    props: { 
      homepage, 
      categoryObj, 
      companies },
    revalidate: 10,
  };
}
