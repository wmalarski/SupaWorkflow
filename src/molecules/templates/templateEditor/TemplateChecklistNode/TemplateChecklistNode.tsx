import React from "react";
import { ListForm } from "../../../../atoms";
import { MessageNodeType } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { TemplateNodeProps } from "../TemplateEditorView/TemplateEditorView.utils";

const TemplateChecklistNode = ({
  data,
}: TemplateNodeProps): React.ReactElement | null => {
  const text = useText();

  const { message, onChange } = data;

  if (
    message.data.kind !== "node" ||
    message.data.datatype !== MessageNodeType.ChecklistTemplate
  )
    return null;

  const handleValid = (tasks: string[]) =>
    onChange({
      data: {
        ...message.data,
        datatype: MessageNodeType.ChecklistTemplate,
        tasks,
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
      entries={message.data.tasks}
      onChange={handleValid}
    />
  );
};

export default TemplateChecklistNode;
