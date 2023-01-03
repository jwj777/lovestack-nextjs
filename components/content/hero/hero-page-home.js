import React from "react";
import { Box, Container, Button, Link } from '@chakra-ui/react'
import Headline1White from "../typography/headline1-white";
import Subheading1White from "../typography/subheading1-white";

function HeroPageHome({ pagedata }) {

  return (
    <Box pt={{ base: '8', md: '28'}} pb={{ base: '24', md: '40' }} 
      backgroundColor='black' 
      bgImage={{ base: 'none', 'xl': 'https://lovestack.nyc3.digitaloceanspaces.com/dsbg4_66c05af1db.png?'}} 
      backgroundRepeat='no-repeat'
      backgroundPosition={{ base: '20% 40%', '2xl': '60% 40%' }}
    >
      <Container maxW='container.2xl'>
        <Box display='flex' justifyContent='space-between'>
          <Box ml={{ base: '0', xl: '16' }}>
            <Box mb='8'>
              <Headline1White text={pagedata.Headline}></Headline1White>
            </Box>
            <Subheading1White text={pagedata.Subheading}></Subheading1White>
            <Link href='/pages/categories'>
              <Button  variant='blue500ol' mt='10'>Browse Software</Button>
            </Link>
          </Box>
          <Box mr={{ base: 0, xl: '12'}} display={{ base: 'none', '2xl': 'block' }}>
          </Box>
        </Box>
      </Container>
    </Box>
  )}

export default HeroPageHome;
