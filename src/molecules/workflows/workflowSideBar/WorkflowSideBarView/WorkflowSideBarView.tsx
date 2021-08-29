import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "../../../../atoms";
import { paths, useText, WorkflowTab } from "../../../../utils";

export type WorkflowSideBarViewProps = {
  organizationId: number;
  workflowId: number;
};

const WorkflowSideBarView = ({
  organizationId,
  workflowId,
}: WorkflowSideBarViewProps): JSX.Element => {
  const text = useText();

  return (
    <VStack align="start" spacing={5}>
      <Heading size="sm">{text("sideBarWorkflow")}</Heading>

      <Link
        href={paths.workflow(organizationId, workflowId)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("sideBarWorkflowDetails")}
        </Text>
      </Link>

      <Link
        href={paths.workflow(organizationId, workflowId, WorkflowTab.edit)}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("sideBarWorkflowEdit")}
        </Text>
      </Link>
    </VStack>
  );
};

export default WorkflowSideBarView;
