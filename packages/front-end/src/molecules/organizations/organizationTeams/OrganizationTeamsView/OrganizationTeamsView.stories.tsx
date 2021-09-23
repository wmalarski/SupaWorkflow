import { ComponentMeta, ComponentStory } from "@storybook/react";
import { defaultTeams } from "@supa-workflow/services";
import React from "react";
import OrganizationTeamsView from "./OrganizationTeamsView";

export default {
  title: "Molecules/Organizations/OrganizationTeamsView",
  component: OrganizationTeamsView,
} as ComponentMeta<typeof OrganizationTeamsView>;

const Template: ComponentStory<typeof OrganizationTeamsView> = (args) => (
  <OrganizationTeamsView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  isLoading: false,
  organizationId: 1,
  organizationRole: "mod",
  onPageChange: () => void 0,
  onDeleteTeam: () => void 0,
  page: 0,
  pageSize: 10,
  count: 20,
  teams: defaultTeams,
};
