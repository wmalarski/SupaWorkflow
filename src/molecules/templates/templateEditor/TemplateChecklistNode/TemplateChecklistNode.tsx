import React from "react";
import { ListForm } from "../../../../atoms";
import { Message } from "../../../../services";
import { MessageNodeChecklistTemplateData } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { MutationArgs } from "../../../../utils/rep";

export type TemplateChecklistNodeProps = {
  message: Message;
  data: MessageNodeChecklistTemplateData;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

const TemplateChecklistNode = ({
  message,
  data,
  onChange,
}: TemplateChecklistNodeProps): React.ReactElement => {
  const text = useText();

  const handleValid = (tasks: string[]) =>
    onChange({
      data: { ...data, tasks },
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
      entries={data.tasks}
      onChange={handleValid}
    />
  );
};

export default TemplateChecklistNode;
