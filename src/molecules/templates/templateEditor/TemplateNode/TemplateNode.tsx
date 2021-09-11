import React from "react";
import { Message } from "../../../../services";
import { MutationArgs } from "../../../../utils/rep";

export type TemplateNodeProps = {
  message: Message;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

const TemplateNode = ({ message }: TemplateNodeProps): React.ReactElement => {
  return <div>{`TemplateNode: ${JSON.stringify(message, null, 2)}`}</div>;
};

export default TemplateNode;
