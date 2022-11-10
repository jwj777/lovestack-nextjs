import { Flex, Heading, Box, LinkBox, LinkOverlay, Text, extendTheme } from '@chakra-ui/react'
import Layout from '/components/layout/Layout'
import Header from '/components/header/Header'


export default function Categories({ catPage, categories }) {
  return (

  <Layout>

    <Flex className="categories-container" flexDirection='column' maxW='container.lg'>

    <Flex h={120}>
      <Heading fontSize='6xl' mb={3}>{catPage.attributes.Headline}</Heading>
    </Flex>

    {categories.map((item, index) => {
      return (

      <Box key={item.attributes.slug} className="category-item" flex='1' mb={8}>
        <LinkBox>
          <LinkOverlay href={"/categories/" + item.attributes.slug}>
            <Heading textStyle='h2' as='h2' size='lg' mb={2}>
              {item.attributes.categoryName}
            </Heading>
            <Text 
              className="subheading">{item.attributes.categoryDescription}
            </Text>
          </LinkOverlay>
        </LinkBox>
      </Box>

      );
    })}

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
  const rescat = await fetch(`${process.env.API_URL}/api/product-categories`);
  const rescatjson = await rescat.json();
  const categories = rescatjson.data;

  return {
    props: { catPage, categories },
  };

}