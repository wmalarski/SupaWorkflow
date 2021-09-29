import React from "react";
import {
  useOrganizationContext,
  useSelectTeams,
  useTemplateContext,
} from "services";
import { useRepContext } from "utils/rep/RepContext";
import TemplateEditorView from "../TemplateEditorView/TemplateEditorView";

type ViewProps = React.ComponentProps<typeof TemplateEditorView>;

export type TemplateEditorProps = {
  View?: React.ComponentType<ViewProps>;
};

const TemplateEditor = ({
  View = TemplateEditorView,
}: TemplateEditorProps): React.ReactElement => {
  const organization = useOrganizationContext();
  const template = useTemplateContext();

  const { mutations, useMessages } = useRepContext();

  const messages = useMessages({ templateId: template.id });

  const { data: teams } = useSelectTeams({
    organizationId: organization.id,
    from: 0,
    to: 50,
  });

  return (
    <View
      teams={teams?.entries ?? []}
      templateId={template.id}
      messages={messages}
      onDelete={mutations.delMessage}
      onChange={mutations.putMessage}
    />
  );
};

export default React.memo(TemplateEditor);
