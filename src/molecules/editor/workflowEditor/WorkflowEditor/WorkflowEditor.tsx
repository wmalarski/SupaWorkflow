import React from "react";
import {
  useOrganizationContext,
  useSelectTeams,
  useWorkflowContext,
} from "services";
import { useRepContext } from "utils/rep/RepContext";
import WorkflowEditorView from "../WorkflowEditorView/WorkflowEditorView";

export type WorkflowEditorProps = {
  View?: React.ComponentType<React.ComponentProps<typeof WorkflowEditorView>>;
};

const WorkflowEditor = ({
  View = WorkflowEditorView,
}: WorkflowEditorProps): React.ReactElement => {
  const organization = useOrganizationContext();
  const workflow = useWorkflowContext();

  const { mutations, useMessages } = useRepContext();

  const messages = useMessages({
    templateId: workflow.template_id,
    workflowId: workflow.id,
  });

  const { data: teams } = useSelectTeams({
    organizationId: organization.id,
    from: 0,
    to: 50,
  });

  return (
    <View
      messages={messages}
      onChange={mutations.putMessage}
      teams={teams?.entries ?? []}
    />
  );
};

export default React.memo(WorkflowEditor);
