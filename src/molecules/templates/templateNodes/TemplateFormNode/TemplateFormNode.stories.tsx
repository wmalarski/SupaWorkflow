import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultMessage, defaultTeams } from "../../../../services";
import { MessageKind, MessageNodeType } from "../../../../services/nodes";
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
      state: {
        nodeType: MessageNodeType.Form,
        kind: MessageKind.TemplateNode,
        position: { x: 0, y: 0 },
        fields: ["field1", "field2"],
        isTargetAll: true,
        teamId: 1,
        description: "",
        title: "",
      },
    },
    teams: defaultTeams,
    onChange: () => void 0,
  },
};
