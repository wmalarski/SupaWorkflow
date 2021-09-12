import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultMessage } from "../../../../services";
import TemplateFormNode from "./TemplateFormNode";

export default {
  title: "Molecules/Templates/TemplateFormNode",
  component: TemplateFormNode,
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof TemplateFormNode>;

const Template: ComponentStory<typeof TemplateFormNode> = (args) => (
  <TemplateFormNode {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  data: {
    datatype: "formTemplate",
    kind: "node",
    position: { x: 0, y: 0 },
    fields: ["field1", "field2"],
  },
  message: defaultMessage,
};
