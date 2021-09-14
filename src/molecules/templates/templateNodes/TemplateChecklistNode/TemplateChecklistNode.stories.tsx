import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultMessage, defaultTeams } from "../../../../services";
import { MessageKind, MessageNodeType } from "../../../../services/nodes";
import TemplateChecklistNode from "./TemplateChecklistNode";

export default {
  title: "Molecules/Templates/TemplateChecklistNode",
  component: TemplateChecklistNode,
} as ComponentMeta<typeof TemplateChecklistNode>;

const Template: ComponentStory<typeof TemplateChecklistNode> = (args) => (
  <TemplateChecklistNode {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  data: {
    message: {
      ...defaultMessage,
      data: {
        datatype: MessageNodeType.Checklist,
        kind: MessageKind.TemplateNode,
        position: { x: 0, y: 0 },
        tasks: ["task1", "task2"],
        isTargetAll: false,
        teamId: 3,
        description: "",
        title: "",
      },
    },
    teams: defaultTeams,
    onChange: () => void 0,
  },
};
