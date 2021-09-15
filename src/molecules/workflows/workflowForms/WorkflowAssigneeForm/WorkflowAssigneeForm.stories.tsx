import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultTeam, defaultTeamMembers } from "../../../../services";
import WorkflowAssigneeForm from "./WorkflowAssigneeForm";

export default {
  title: "Molecules/Workflows/WorkflowAssigneeForm",
  component: WorkflowAssigneeForm,
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof WorkflowAssigneeForm>;

const Template: ComponentStory<typeof WorkflowAssigneeForm> = (args) => (
  <WorkflowAssigneeForm {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  assigneeId: null,
  teamId: defaultTeam.id,
  teams: [defaultTeam],
  teamMembers: defaultTeamMembers,
};
