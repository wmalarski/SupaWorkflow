import React from "react";
import { Message } from "../../../../services";
import { MessageNodeDecisionTemplateData } from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";

export type TemplateDecisionNodeProps = {
  message: Message;
  data: MessageNodeDecisionTemplateData;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

const TemplateDecisionNode = ({
  data,
}: TemplateDecisionNodeProps): JSX.Element => {
  return (
    <div>
      {`TemplateDecisionNode: `}
      {data}
    </div>
  );
};

export default TemplateDecisionNode;
