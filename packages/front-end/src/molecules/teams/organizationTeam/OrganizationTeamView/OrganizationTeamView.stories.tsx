import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultTeamMembers } from "../../../../services";
import OrganizationTeamView from "./OrganizationTeamView";

export default {
  title: "Molecules/Teams/OrganizationTeamView",
  component: OrganizationTeamView,
} as ComponentMeta<typeof OrganizationTeamView>;

const Template: ComponentStory<typeof OrganizationTeamView> = (args) => (
  <OrganizationTeamView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  onDeleteClick: () => void 0,
  onPageChange: () => void 0,
  page: 0,
  pageSize: 10,
  count: 30,
  isLoading: false,
  teamMembers: defaultTeamMembers,
  organizationRole: "mod",
};
