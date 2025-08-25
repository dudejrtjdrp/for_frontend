'use client';

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import  { GlobalStyle }  from "@/styles/global";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
