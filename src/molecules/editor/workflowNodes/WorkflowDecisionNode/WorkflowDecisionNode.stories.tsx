import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import WorkflowDecisionNode from "./WorkflowDecisionNode";

export default {
  title: "Molecules/Workflows/WorkflowDecisionNode",
  component: WorkflowDecisionNode,
} as ComponentMeta<typeof WorkflowDecisionNode>;

const Template: ComponentStory<typeof WorkflowDecisionNode> = (args) => (
  <WorkflowDecisionNode {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
