import { Box, Button, Text } from '@chakra-ui/react'
import Demo from './components/ui/demo'
function App() {

  return (
    <Box textAlign={'center'} p={5} backgroundColor={'gray'}>
      <Text fontSize={'2xl'}>Hello, World!</Text>
      <Button colorScheme={'purple'} _hover={'black'}>Click me!</Button>
      <Demo />
    </Box>
  )
}

export default App
