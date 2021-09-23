import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import WorkflowDetailsView from "./WorkflowDetailsView";

export default {
  title: "Molecules/Workflows/WorkflowDetailsView",
  component: WorkflowDetailsView,
} as ComponentMeta<typeof WorkflowDetailsView>;

const Template: ComponentStory<typeof WorkflowDetailsView> = (args) => (
  <WorkflowDetailsView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
