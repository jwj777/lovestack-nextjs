import { Flex, Heading, Box, LinkBox, LinkOverlay, Text, extendTheme } from '@chakra-ui/react'
import Layout from '/components/layout/Layout'
import Header from '/components/header/Header'


export default function Categories({ categories }) {
  return (

  <Layout>

    <Flex classsName="categoriesContainer" flexDirection='column' maxW='container.lg'>

    {categories.map((item, index) => {
      return (

      <Box className="categoryItem" flex='1' mb={8}>
        <LinkBox>
          <LinkOverlay href={"/categories/" + item.attributes.slug}>
            <Heading textStyle='h2' as='h2' size='lg' mb={2}>
              {item.attributes.name}
            </Heading>
            <Text 
              className="subheading">{item.attributes.description}
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

  // get categories from strapi
  const rescat = await fetch('http://localhost:1337/api/product-categories');
  const rescatjson = await rescat.json();
  const categories = rescatjson.data;

  return {
    props: { categories },
  };

}