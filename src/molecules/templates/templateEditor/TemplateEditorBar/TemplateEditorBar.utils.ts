import { nanoid } from "nanoid";
import { MessageKind, MessageNodeType } from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";

export type GetNewNodeMessageOptions = {
  nodeType: MessageNodeType;
  templateId: number;
};

const stateBase = {
  position: { x: 0, y: 0 },
  isTargetAll: false,
  teamId: 1,
  description: "",
  title: "",
};

export const getNewNodeMessage = ({
  nodeType,
  templateId,
}: GetNewNodeMessageOptions): MutationArgs["putMessage"] | null => {
  const base = {
    id: nanoid(),
    workflow_id: null,
    template_id: templateId,
  };

  switch (nodeType) {
    case MessageNodeType.Checklist:
      return {
        ...base,
        state: {
          ...stateBase,
          kind: MessageKind.TemplateNode,
          nodeType: MessageNodeType.Checklist,
          tasks: [""],
        },
      };
    case MessageNodeType.Decision:
      return {
        ...base,
        state: {
          ...stateBase,
          kind: MessageKind.TemplateNode,
          nodeType: MessageNodeType.Decision,
          routes: [""],
        },
      };
    case MessageNodeType.Form:
      return {
        ...base,
        state: {
          ...stateBase,
          kind: MessageKind.TemplateNode,
          nodeType: MessageNodeType.Form,
          fields: [""],
        },
      };
    default:
      return null;
  }
};
