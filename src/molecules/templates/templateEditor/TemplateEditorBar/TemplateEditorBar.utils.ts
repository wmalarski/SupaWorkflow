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

  const dataBase = {
    position: { x: 0, y: 0 },
    isTargetAll: false,
    teamIds: [],
    description: "",
    title: "",
  };

  switch (datatype) {
    case MessageNodeType.ChecklistTemplate:
      return {
        ...base,
        data: {
          ...dataBase,
          kind: "node",
          datatype: MessageNodeType.ChecklistTemplate,
          tasks: [""],
        },
      };
    case MessageNodeType.DecisionTemplate:
      return {
        ...base,
        data: {
          ...dataBase,
          kind: "node",
          datatype: MessageNodeType.DecisionTemplate,
          routes: [""],
        },
      };
    case MessageNodeType.FormTemplate:
      return {
        ...base,
        data: {
          ...dataBase,
          kind: "node",
          datatype: MessageNodeType.FormTemplate,
          fields: [""],
        },
      };
  }
};
