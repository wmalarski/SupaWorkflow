import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import WorkflowChecklistNode from "./WorkflowChecklistNode";

export default {
  title: "Molecules/Workflows/WorkflowChecklistNode",
  component: WorkflowChecklistNode,
} as ComponentMeta<typeof WorkflowChecklistNode>;

const Template: ComponentStory<typeof WorkflowChecklistNode> = (args) => (
  <WorkflowChecklistNode {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
