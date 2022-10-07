import { Flex, Container } from '@chakra-ui/react'
import Header from '/components/header/Header'

export default function Layout({ children }) {
  return (

    <div>

      <div className="header-container">
        <Header />
      </div>

      <main role="main">
        <Container maxW="container.xl" mt={16}>
          { children }
        </Container>
      </main>

    </div>

  )
}
