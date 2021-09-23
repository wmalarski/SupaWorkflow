import { Center, CircularProgress } from "@chakra-ui/react";
import React from "react";

const LoadingPane = (): React.ReactElement => {
  return (
    <Center width="100vw" height="100vh">
      <CircularProgress isIndeterminate />
    </Center>
  );
};

export default LoadingPane;
