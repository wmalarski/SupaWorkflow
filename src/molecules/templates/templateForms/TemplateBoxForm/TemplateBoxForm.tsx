import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";

export type TemplateBoxFormProps = {
  children: React.ReactNode;
};

const TemplateBoxForm = ({
  children,
}: TemplateBoxFormProps): React.ReactElement => {
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

export default TemplateBoxForm;
