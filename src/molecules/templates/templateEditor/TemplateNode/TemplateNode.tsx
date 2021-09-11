import React from "react";
import { Message } from "../../../../services";
import { MutationArgs } from "../../../../utils/rep";
import TemplateChecklistNode from "../TemplateChecklistNode/TemplateChecklistNode";
import TemplateDecisionNode from "../TemplateDecisionNode/TemplateDecisionNode";
import TemplateFormNode from "../TemplateFormNode/TemplateFormNode";

export type TemplateNodeProps = {
  message: Message;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

const TemplateNode = ({
  message,
  onChange,
}: TemplateNodeProps): React.ReactElement | null => {
  if (message.data.kind !== "node") return null;

  switch (message.data.datatype) {
    case "checklistTemplate":
      return (
        <TemplateChecklistNode
          message={message}
          data={message.data}
          onChange={onChange}
        />
      );
    case "formTemplate":
      return (
        <TemplateFormNode
          message={message}
          data={message.data}
          onChange={onChange}
        />
      );
    case "decisionTemplate":
      return (
        <TemplateDecisionNode
          message={message}
          data={message.data}
          onChange={onChange}
        />
      );
  }
};

export default TemplateNode;
