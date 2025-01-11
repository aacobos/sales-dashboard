import { CardComponent, Header } from '@/components'
import { Container } from '@mui/material'

function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent className="">CARD</CardComponent>
      </Container>
    </>
  )
}

export default Home
