import React from "react";
import { ListForm } from "../../../../atoms";
import { MessageNodeType } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { TemplateNodeProps } from "../TemplateEditorView/TemplateEditorView.utils";

const TemplateDecisionNode = ({
  data,
}: TemplateNodeProps): React.ReactElement | null => {
  const text = useText();

  const { message, onChange } = data;

  if (
    message.data.kind !== "node" ||
    message.data.datatype !== MessageNodeType.DecisionTemplate
  )
    return null;

  const handleValid = (routes: string[]) =>
    onChange({
      data: {
        ...message.data,
        datatype: MessageNodeType.DecisionTemplate,
        routes,
      },
      id: message.id,
      template_id: message.template_id,
      workflow_id: message.workflow_id,
    });

  return (
    <ListForm
      text={{
        add: text("addTemplateNodeOption"),
        delete: text("deleteTemplateNodeOption"),
        down: text("downTemplateNodeOption"),
        save: text("saveTemplateNode"),
        up: text("upTemplateNodeOption"),
      }}
      entries={message.data.routes}
      onChange={handleValid}
    />
  );
};

export default TemplateDecisionNode;
