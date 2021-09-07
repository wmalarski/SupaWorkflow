import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services";
import theme from "../styles/theme";
import { UserContextProvider } from "../utils";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </QueryClientProvider>
  </ChakraProvider>
);

export default MyApp;
