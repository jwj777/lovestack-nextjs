import { Flex, Heading, Box, LinkBox, LinkOverlay, Text, extendTheme } from '@chakra-ui/react'
import Layout from '/components/layout/Layout'
import Header from '/components/header/Header'


export default function Categories({ categories }) {
  return (

  <Layout>

    <Flex classsName="categoriesContainer" flexDirection='column' maxW='container.lg'>

    {categories.map((item, index) => {
      return (

      <Box key={item.id} className="categoryItem" flex='1' mb={8}>
        <LinkBox>
          <LinkOverlay href={"/categories/" + item.data.attributes.slug}>
            <Heading textStyle='h2' as='h2' size='lg' mb={2}>
              {item.data.attributes.name}
            </Heading>
            <Text 
              className="subheading">{item.data.attributes.description}
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
  const rescat = await fetch(process.env.API_URL + '/api/product-categories');
  const categories = await rescat.json();

  return {
    props: { categories },
  };

}