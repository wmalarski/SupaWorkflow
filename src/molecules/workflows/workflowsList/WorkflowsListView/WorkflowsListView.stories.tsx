import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import WorkflowsListView from "./WorkflowsListView";

export default {
  title: "Molecules/Workflows/WorkflowsListView",
  component: WorkflowsListView,
} as ComponentMeta<typeof WorkflowsListView>;

const Template: ComponentStory<typeof WorkflowsListView> = (args) => (
  <WorkflowsListView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
