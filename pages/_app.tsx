import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import { createEmotionCache } from '@/utils';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';
import theme from '@/themes';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}
