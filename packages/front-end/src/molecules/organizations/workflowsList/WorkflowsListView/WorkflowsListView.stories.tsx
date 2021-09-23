import { ComponentMeta, ComponentStory } from "@storybook/react";
import { defaultWorkflows } from "@supa-workflow/services";
import React from "react";
import WorkflowsListView from "./WorkflowsListView";

export default {
  title: "Molecules/Organizations/WorkflowsListView",
  component: WorkflowsListView,
} as ComponentMeta<typeof WorkflowsListView>;

const Template: ComponentStory<typeof WorkflowsListView> = (args) => (
  <WorkflowsListView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  onPageChange: () => void 0,
  page: 0,
  pageSize: 10,
  count: 5,
  isLoading: false,
  workflows: defaultWorkflows,
};
