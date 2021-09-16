import React from "react";
import { useSelectTeams } from "../../../../services";
import {
  useOrganizationContext,
  useTemplateContext,
  useWorkflowContext,
} from "../../../../utils";
import { useMessages } from "../../../../utils/rep";
import { useRepMutations } from "../../../../utils/rep/RepContext";
import WorkflowEditorView from "../WorkflowEditorView/WorkflowEditorView";

type ViewProps = React.ComponentProps<typeof WorkflowEditorView>;

export type WorkflowEditorProps = {
  View?: React.ComponentType<ViewProps>;
};

const WorkflowEditor = ({
  View = WorkflowEditorView,
}: WorkflowEditorProps): React.ReactElement => {
  const { organization } = useOrganizationContext();
  const workflow = useWorkflowContext();
  const template = useTemplateContext();

  const messages = useMessages({
    templateId: template.id,
    workflowId: workflow.id,
  });

  const { putMessage: putMessage } = useRepMutations();

  const { data: teams } = useSelectTeams({
    organizationId: organization.id,
    from: 0,
    to: 50,
  });

  return (
    <View
      messages={messages}
      onChange={putMessage}
      teams={teams?.entries ?? []}
    />
  );
};

export default React.memo(WorkflowEditor);
