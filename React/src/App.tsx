import { Container, Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'

function App() {

  return (
    <Stack h="100vh">
      <Navbar>
      </Navbar>
      <Container>
        <TodoForm>
        </TodoForm>
      </Container>
    </Stack>
  )
}

export default App
