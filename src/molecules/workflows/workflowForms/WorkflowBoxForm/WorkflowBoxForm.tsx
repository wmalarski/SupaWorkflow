import { Box } from "@chakra-ui/react";
import React from "react";

export type WorkflowBoxFormProps = {
  children: React.ReactNode;
  isEnabled: boolean;
};

const WorkflowBoxForm = ({
  children,
}: WorkflowBoxFormProps): React.ReactElement => (
  <Box bg="white" border="solid" borderWidth={1} borderRadius={5} padding={2}>
    {children}
    <Box
      position="fixed"
      display="none"
      top={0}
      left={0}
      right={0}
      bottom={0}
      width="100%"
      height="100%"
      bg="gray.100"
      zIndex={2}
    />
  </Box>
);

export default WorkflowBoxForm;
