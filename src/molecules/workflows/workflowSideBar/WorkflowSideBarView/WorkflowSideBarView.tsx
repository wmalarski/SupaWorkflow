import { Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "atoms";
import React from "react";
import { paths, useText, WorkflowTab } from "utils";

export type WorkflowSideBarViewProps = {
  organizationId: number;
  workflowId: number;
};

const WorkflowSideBarView = ({
  organizationId,
  workflowId,
}: WorkflowSideBarViewProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack align="start" spacing={5}>
      <Heading size="sm">{text("navigationWorkflow")}</Heading>

      <Link
        href={paths.workflow({ organizationId, workflowId })}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("navigationWorkflowDetails")}
        </Text>
      </Link>

      <Link
        href={paths.workflow({
          organizationId,
          workflowId,
          tab: WorkflowTab.edit,
        })}
        nextProps={{ shallow: true }}
      >
        <Text pl={3} fontSize="sm">
          {text("navigationWorkflowEdit")}
        </Text>
      </Link>
    </VStack>
  );
};

export default WorkflowSideBarView;
