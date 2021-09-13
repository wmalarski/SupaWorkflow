import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultTeam } from "../../../../services";
import OrganizationTeamsView from "./OrganizationTeamsView";

export default {
  title: "Molecules/Teams/OrganizationTeamsView",
  component: OrganizationTeamsView,
} as ComponentMeta<typeof OrganizationTeamsView>;

const Template: ComponentStory<typeof OrganizationTeamsView> = (args) => (
  <OrganizationTeamsView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  isLoading: false,
  organizationId: 1,
  onPageChange: () => void 0,
  onDeleteTeam: () => void 0,
  page: 0,
  pageSize: 10,
  count: 20,
  teams: Array(5)
    .fill(defaultTeam)
    .map((team, index) => ({
      ...team,
      id: index,
      name: `${team.name} ${index}`,
    })),
};
