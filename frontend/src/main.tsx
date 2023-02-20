import { ColorModeScript } from '@chakra-ui/color-mode';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
