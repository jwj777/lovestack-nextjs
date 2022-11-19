import { Flex, Heading, Box, LinkBox, LinkOverlay, Text, extendTheme } from '@chakra-ui/react'
import Layout from '/components/layout/Layout'
import Header from '/components/header/Header'
import CategoryItemChild from '../../components/category/category-item-child';
import CategoryItem from '../../components/category/category-item';


export default function Categories({ catPage, categories, parent_categories, categoryObj }) {
  return (

  <Layout>

    <Flex className="categories-container" flexDirection='column' maxW='container.lg'>

    <Heading as='h1' mb={12}>{catPage.attributes.Headline}</Heading>

    <Box class="categories-container">
      {categoryObj.map((item, index) => {
        return(
        <CategoryItem item={item} index={index} />
        )
      })}
    </Box>

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



  // Try this - add the parent category filters in the fetch sectionn .  

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

  categoryObj.map((item, index) => {
    // console.log(item)
    item.childCategories.map((item, index) => {
      console.log(item.categoryNameChild)
    })
  })

  return {
    props: { catPage, categories, parent_categories, categoryObj },
  };

}