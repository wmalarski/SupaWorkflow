import { Heading, LinkBox, Text } from "@chakra-ui/react";
import { Workflow } from "@supa-workflow/services";
import { LinkOverlay } from "atoms";
import React from "react";
import { paths } from "utils";

export type WorkflowListItemProps = {
  workflow: Workflow;
};

const WorkflowListItem = ({
  workflow,
}: WorkflowListItemProps): React.ReactElement => (
  <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
    <Heading size="md" my="2">
      <LinkOverlay href={paths.workflow(workflow.organization_id, workflow.id)}>
        {workflow.name}
      </LinkOverlay>
    </Heading>
    <Text>{workflow.description}</Text>
  </LinkBox>
);

export default WorkflowListItem;
