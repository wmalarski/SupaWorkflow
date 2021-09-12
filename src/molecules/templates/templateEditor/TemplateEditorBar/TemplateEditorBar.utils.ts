import { nanoid } from "nanoid";
import { MessageNodeType } from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";

export type GetNewNodeMessageOptions = {
  datatype: MessageNodeType;
  templateId: number;
};

export const getNewNodeMessage = ({
  datatype,
  templateId,
}: GetNewNodeMessageOptions): MutationArgs["putMessage"] => {
  const base = {
    id: nanoid(),
    workflow_id: null,
    template_id: templateId,
  };

  switch (datatype) {
    case MessageNodeType.ChecklistTemplate:
      return {
        ...base,
        data: {
          datatype: MessageNodeType.ChecklistTemplate,
          kind: "node",
          position: { x: 0, y: 0 },
          tasks: [""],
        },
      };
    case MessageNodeType.DecisionTemplate:
      return {
        ...base,
        data: {
          datatype: MessageNodeType.DecisionTemplate,
          kind: "node",
          position: { x: 0, y: 0 },
          routes: [""],
        },
      };
    case MessageNodeType.FormTemplate:
      return {
        ...base,
        data: {
          datatype: MessageNodeType.FormTemplate,
          kind: "node",
          position: { x: 0, y: 0 },
          fields: [""],
        },
      };
  }
};
