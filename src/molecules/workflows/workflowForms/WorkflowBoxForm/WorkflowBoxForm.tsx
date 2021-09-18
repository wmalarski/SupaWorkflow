import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";

export type WorkflowBoxFormProps = {
  children: React.ReactNode;
  isEnabled: boolean;
};

const WorkflowBoxForm = ({
  children,
}: WorkflowBoxFormProps): React.ReactElement => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "white" : "brand.900"}
      border="solid"
      borderWidth={1}
      borderRadius={5}
      padding={2}
    >
      {children}
    </Box>
  );
};

export default WorkflowBoxForm;
