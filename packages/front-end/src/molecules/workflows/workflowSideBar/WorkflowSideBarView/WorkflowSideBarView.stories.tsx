import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import WorkflowSideBarView from "./WorkflowSideBarView";

export default {
  title: "Molecules/Workflows/WorkflowSideBarView",
  component: WorkflowSideBarView,
} as ComponentMeta<typeof WorkflowSideBarView>;

const Template: ComponentStory<typeof WorkflowSideBarView> = (args) => (
  <WorkflowSideBarView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  organizationId: 1,
  workflowId: 1,
};
