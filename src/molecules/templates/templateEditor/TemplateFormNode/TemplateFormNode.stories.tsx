import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultMessage } from "../../../../services";
import { MessageNodeType } from "../../../../services/nodes";
import TemplateFormNode from "./TemplateFormNode";

export default {
  title: "Molecules/Templates/TemplateFormNode",
  component: TemplateFormNode,
} as ComponentMeta<typeof TemplateFormNode>;

const Template: ComponentStory<typeof TemplateFormNode> = (args) => (
  <TemplateFormNode {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  data: {
    message: {
      ...defaultMessage,
      data: {
        datatype: MessageNodeType.FormTemplate,
        kind: "node",
        position: { x: 0, y: 0 },
        fields: ["field1", "field2"],
      },
    },
    onChange: () => void 0,
  },
};
