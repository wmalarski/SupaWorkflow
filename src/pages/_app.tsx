import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React from "react";
import { QueryClientProvider } from "react-query";
import queryClient from "../services/queryClient";
import theme from "../styles/theme";
import { UserContextProvider } from "../utils/auth/UserContext";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <UserContextProvider>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ChakraProvider>
    </UserContextProvider>
  );
};
export default MyApp;
