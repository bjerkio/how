import type { AppProps } from 'next/app';
import { ThemeProvider, Container, merge } from 'theme-ui';
import { theme } from '@bjerk/brand';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const policyTheme = merge(theme, {
  styles: {
    root: {
      backgroundColor: 'white',
    },
    h1: {
      fontSize: 3,
      mb: 5,
    },
    h2: {
      fontSize: 2,
      fontWeight: 'bold',
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  const [dataProps, setDataProps] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (router.query.data) {
      const dataFromBase64 = Buffer.from(
        router.query.data.toString(),
        'base64',
      ).toString('utf-8');
      setDataProps(JSON.parse(dataFromBase64));
    }
  }, [setDataProps, router.query]);

  return (
    <ThemeProvider theme={policyTheme}>
      <Container sx={{ width: 'readable', p: 4 }}>
        <Component {...pageProps} {...dataProps} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
