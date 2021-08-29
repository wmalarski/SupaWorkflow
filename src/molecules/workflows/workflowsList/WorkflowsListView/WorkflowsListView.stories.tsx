import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultWorkflow } from "../../../../services";
import WorkflowsListView from "./WorkflowsListView";

export default {
  title: "Molecules/Workflows/WorkflowsListView",
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
  workflows: Array(5)
    .fill(defaultWorkflow)
    .map((workflow, index) => ({ ...workflow, id: index })),
};
