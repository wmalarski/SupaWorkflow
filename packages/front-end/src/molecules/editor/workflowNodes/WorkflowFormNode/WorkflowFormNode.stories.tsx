import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import WorkflowFormNode from "./WorkflowFormNode";

export default {
  title: "Molecules/Editor/WorkflowFormNode",
  component: WorkflowFormNode,
} as ComponentMeta<typeof WorkflowFormNode>;

const Template: ComponentStory<typeof WorkflowFormNode> = (args) => (
  <WorkflowFormNode {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
