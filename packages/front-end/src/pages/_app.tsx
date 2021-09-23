import { ChakraProvider } from "@chakra-ui/react";
import { queryClient, UserContextProvider } from "@supa-workflow/services";
import type { AppProps } from "next/app";
import React from "react";
import { QueryClientProvider } from "react-query";
import theme from "../styles/theme";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </QueryClientProvider>
  </ChakraProvider>
);

export default MyApp;
