import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  defaultTeams,
  MessageKind,
  MessageNodeType,
} from "@supa-workflow/services";
import React from "react";
import TemplateFormNode from "./TemplateFormNode";

export default {
  title: "Molecules/Editor/TemplateFormNode",
  component: TemplateFormNode,
} as ComponentMeta<typeof TemplateFormNode>;

const Template: ComponentStory<typeof TemplateFormNode> = (args) => (
  <TemplateFormNode {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  data: {
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
    messageId: "1",
    templateId: 1,
    teams: defaultTeams,
    onChange: () => void 0,
  },
};
