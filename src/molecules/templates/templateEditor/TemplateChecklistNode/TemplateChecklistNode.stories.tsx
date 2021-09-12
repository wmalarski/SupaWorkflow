import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultMessage } from "../../../../services";
import { MessageNodeType } from "../../../../services/nodes";
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
        datatype: MessageNodeType.ChecklistTemplate,
        kind: "node",
        position: { x: 0, y: 0 },
        tasks: ["task1", "task2"],
      },
    },
    onChange: () => void 0,
  },
};
