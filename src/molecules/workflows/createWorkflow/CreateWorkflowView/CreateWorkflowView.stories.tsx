import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CreateWorkflowView from "./CreateWorkflowView";

export default {
  title: "Molecules/Workflows/CreateWorkflowView",
  component: CreateWorkflowView,
} as ComponentMeta<typeof CreateWorkflowView>;

const Template: ComponentStory<typeof CreateWorkflowView> = (args) => (
  <CreateWorkflowView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
