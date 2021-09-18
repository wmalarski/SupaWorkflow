import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";

export type NodeBoxFormProps = {
  children: React.ReactNode;
};

const NodeBoxForm = ({ children }: NodeBoxFormProps): React.ReactElement => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === "light" ? "white" : "brand.900"}
      border="solid"
      borderWidth={1}
      borderColor="black"
      borderRadius={5}
      padding={2}
    >
      {children}
    </Box>
  );
};

export default NodeBoxForm;
