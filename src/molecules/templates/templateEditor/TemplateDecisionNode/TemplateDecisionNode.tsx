import React from "react";
import { ListForm } from "../../../../atoms";
import { Message } from "../../../../services";
import { MessageNodeDecisionTemplateData } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { MutationArgs } from "../../../../utils/rep";

export type TemplateDecisionNodeProps = {
  message: Message;
  data: MessageNodeDecisionTemplateData;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

const TemplateDecisionNode = ({
  message,
  data,
  onChange,
}: TemplateDecisionNodeProps): JSX.Element => {
  const text = useText();

  const handleValid = (routes: string[]) =>
    onChange({
      data: { ...data, routes },
      id: message.id,
      template_id: message.template_id,
      workflow_id: message.workflow_id,
    });

  return (
    <ListForm
      addText={text("addTemplateNodeOption")}
      entries={data.routes}
      onChange={handleValid}
      saveText={text("saveTemplateNode")}
    />
  );
};

export default TemplateDecisionNode;
