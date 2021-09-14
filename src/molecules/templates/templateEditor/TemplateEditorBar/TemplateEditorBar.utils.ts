import { nanoid } from "nanoid";
import { MessageKind, MessageNodeType } from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";

export type GetNewNodeMessageOptions = {
  datatype: MessageNodeType;
  templateId: number;
};

const dataBase = {
  position: { x: 0, y: 0 },
  isTargetAll: false,
  teamId: 1,
  description: "",
  title: "",
};

export const getNewNodeMessage = ({
  datatype,
  templateId,
}: GetNewNodeMessageOptions): MutationArgs["putMessage"] | null => {
  const base = {
    id: nanoid(),
    workflow_id: null,
    template_id: templateId,
  };

  switch (datatype) {
    case MessageNodeType.Checklist:
      return {
        ...base,
        data: {
          ...dataBase,
          kind: MessageKind.TemplateNode,
          datatype: MessageNodeType.Checklist,
          tasks: [""],
        },
      };
    case MessageNodeType.Decision:
      return {
        ...base,
        data: {
          ...dataBase,
          kind: MessageKind.TemplateNode,
          datatype: MessageNodeType.Decision,
          routes: [""],
        },
      };
    case MessageNodeType.Form:
      return {
        ...base,
        data: {
          ...dataBase,
          kind: MessageKind.TemplateNode,
          datatype: MessageNodeType.Form,
          fields: [""],
        },
      };
    default:
      return null;
  }
};
