import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import extendTheme from './theme/extendedTheme.tsx'
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={extendTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
