import React from "react";
import { ListForm } from "../../../../atoms";
import { MessageNodeType } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { TemplateNodeProps } from "../TemplateEditorView/TemplateEditorView.utils";

const TemplateFormNode = ({
  data,
}: TemplateNodeProps): React.ReactElement | null => {
  const text = useText();

  const { message, onChange } = data;

  if (
    message.data.kind !== "node" ||
    message.data.datatype !== MessageNodeType.FormTemplate
  )
    return null;

  const handleValid = (fields: string[]) =>
    onChange({
      data: {
        ...message.data,
        datatype: MessageNodeType.FormTemplate,
        fields,
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
      entries={message.data.fields}
      onChange={handleValid}
    />
  );
};

export default TemplateFormNode;
