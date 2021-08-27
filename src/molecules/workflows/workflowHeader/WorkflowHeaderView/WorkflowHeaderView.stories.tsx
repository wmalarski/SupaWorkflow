import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { WorkflowTab } from "../../../../utils";
import WorkflowHeaderView from "./WorkflowHeaderView";

export default {
  title: "Molecules/Workflows/WorkflowHeaderView",
  component: WorkflowHeaderView,
} as ComponentMeta<typeof WorkflowHeaderView>;

const Template: ComponentStory<typeof WorkflowHeaderView> = (args) => (
  <WorkflowHeaderView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  organizationId: 1,
  tab: WorkflowTab.edit,
  workflowId: 1,
};
