import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import MainLayout from '@/components/common/MainLayout';
import GlobalStyles from '@/styles/global-styles';
import { theme } from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [click, setClick] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainLayout>
          {!click ? (
            <Image
              src="/png/onboard.png"
              alt="onboard"
              width={375}
              height={852}
              onClick={() => {
                setClick(true);
              }}
            />
          ) : (
            <Component {...pageProps} />
          )}
        </MainLayout>
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
