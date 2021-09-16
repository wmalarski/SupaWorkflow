import React from "react";
import { useSelectTeams } from "../../../../services";
import { useOrganizationContext, useTemplateContext } from "../../../../utils";
import { useMessages } from "../../../../utils/rep/messages";
import { useRepMutations } from "../../../../utils/rep/RepContext";
import TemplateEditorView from "../TemplateEditorView/TemplateEditorView";

type ViewProps = React.ComponentProps<typeof TemplateEditorView>;

export type TemplateEditorProps = {
  View?: React.ComponentType<ViewProps>;
};

const TemplateEditor = ({
  View = TemplateEditorView,
}: TemplateEditorProps): React.ReactElement => {
  const { organization } = useOrganizationContext();
  const template = useTemplateContext();

  const messages = useMessages({ templateId: template.id });

  const { putMessage: putMessage, delMessage: deleteMessage } =
    useRepMutations();

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
      onDelete={deleteMessage}
      onChange={putMessage}
    />
  );
};

export default React.memo(TemplateEditor);
