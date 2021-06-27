import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import * as chakraComponents from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react'

import MDXComponents from '../src/mdx-components';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <MDXProvider components={{ ...chakraComponents, ...MDXComponents }}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  )
};

export default App;
