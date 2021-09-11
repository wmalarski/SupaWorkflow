import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultMessage } from "../../../../services";
import TemplateChecklistNode from "./TemplateChecklistNode";

export default {
  title: "Molecules/Templates/TemplateChecklistNode",
  component: TemplateChecklistNode,
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof TemplateChecklistNode>;

const Template: ComponentStory<typeof TemplateChecklistNode> = (args) => (
  <TemplateChecklistNode {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  data: {
    datatype: "checklistTemplate",
    kind: "node",
    position: { x: 0, y: 0 },
    tasks: ["task1", "task2"],
  },
  message: defaultMessage,
};
