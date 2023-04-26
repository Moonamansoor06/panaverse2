'use client'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import "@fontsource/akshar"

import {ChakraProvider} from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
    mainComp:`"Akshar", sans-serif`,
  },
})
export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
  
  )
}