import React from "react";
import { Message } from "../../../services";
import { MessageNodeFormTemplateData } from "../../../services/nodes";
import { MutationArgs } from "../../../utils/rep";

export type TemplateFormNodeProps = {
  message: Message;
  data: MessageNodeFormTemplateData;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

const TemplateFormNode = ({ data }: TemplateFormNodeProps): JSX.Element => {
  return (
    <div>
      {`TemplateFormNode: `}
      {data}
    </div>
  );
};

export default TemplateFormNode;
