import { Flex, Heading, Text } from '@chakra-ui/react'
import Layout from '/components/layout/Layout'
import CategoryItem from '../../components/category/category-item';


export default function Categories({ catPage, categoryObj }) {
  return (

  <Layout>
    <Flex className="categories-container" flexDirection='column' maxW='container.lg'>
      <Heading as='h1' mb={2} fontSize={{ base: '4xl', md: '6xl' }}>{catPage.attributes.Headline}</Heading>
      <Text fontSize='2xl' mb={16} maxW='960px'>{catPage.attributes.Subheading}</Text>

      <Flex justify="flex-start" flexWrap="wrap" flexDirection='column'>
        {categoryObj.map((item, index) => {
          return(
          <CategoryItem item={item} key={index} />
          )
        })}
      </Flex>
    </Flex>
  </Layout>

  );
}


export async function getStaticProps() {

  // get categories page data
  const res = await fetch(`${process.env.API_URL}/api/pages?filters[slug]=categories`);
  const catpagejson = await res.json();
  const catPage = catpagejson.data[0];

  // get categories from strapi
  const rescat = await fetch(`${process.env.API_URL}/api/product-categories?populate=*`);
  const rescatjson = await rescat.json();
  const categories = rescatjson.data;

  // get parent categories from strapi
  const resparent = await fetch(`${process.env.API_URL}/api/product-categories?populate=*&filters[child_categories][slug][$notNull]=content`);
  const resparentjson = await resparent.json();
  const parent_categories = resparentjson.data;
 

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

  return {
    props: { catPage, categories, parent_categories, categoryObj },
    revalidate: 10,
  };

}