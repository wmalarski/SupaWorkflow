import React from "react";
import { ListForm } from "../../../../atoms";
import { Message } from "../../../../services";
import { MessageNodeFormTemplateData } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { MutationArgs } from "../../../../utils/rep";

export type TemplateFormNodeProps = {
  message: Message;
  data: MessageNodeFormTemplateData;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

const TemplateFormNode = ({
  message,
  data,
  onChange,
}: TemplateFormNodeProps): JSX.Element => {
  const text = useText();

  const handleValid = (fields: string[]) =>
    onChange({
      data: { ...data, fields },
      id: message.id,
      template_id: message.template_id,
      workflow_id: message.workflow_id,
    });

  return (
    <ListForm
      addText={text("addTemplateNodeOption")}
      entries={data.fields}
      onChange={handleValid}
      saveText={text("saveTemplateNode")}
    />
  );
};

export default TemplateFormNode;
