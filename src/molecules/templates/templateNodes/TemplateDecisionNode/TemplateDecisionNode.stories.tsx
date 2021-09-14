import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultMessage, defaultTeams } from "../../../../services";
import { MessageNodeType } from "../../../../services/nodes";
import TemplateDecisionNode from "./TemplateDecisionNode";

export default {
  title: "Molecules/Templates/TemplateDecisionNode",
  component: TemplateDecisionNode,
} as ComponentMeta<typeof TemplateDecisionNode>;

const Template: ComponentStory<typeof TemplateDecisionNode> = (args) => (
  <TemplateDecisionNode {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  data: {
    message: {
      ...defaultMessage,
      data: {
        datatype: MessageNodeType.DecisionTemplate,
        kind: "node",
        position: { x: 0, y: 0 },
        routes: ["route1", "route2"],
        isTargetAll: false,
        teamIds: [1, 2],
        description: "",
        title: "",
      },
    },
    teams: defaultTeams,
    onChange: () => void 0,
  },
};