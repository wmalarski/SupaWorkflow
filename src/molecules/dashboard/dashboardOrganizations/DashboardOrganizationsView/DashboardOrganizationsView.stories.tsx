import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultOrganization } from "../../../../services";
import DashboardOrganizationsView from "./DashboardOrganizationsView";

export default {
  title: "Molecules/Dashboard/DashboardOrganizationsView",
  component: DashboardOrganizationsView,
} as ComponentMeta<typeof DashboardOrganizationsView>;

const Template: ComponentStory<typeof DashboardOrganizationsView> = (args) => (
  <DashboardOrganizationsView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  isLoading: false,
  organizations: [
    { ...defaultOrganization, id: 1, name: "Org 1" },
    { ...defaultOrganization, id: 2, name: "Org 2" },
    { ...defaultOrganization, id: 3, name: "Org 3" },
    { ...defaultOrganization, id: 4, name: "Org 4" },
    { ...defaultOrganization, id: 5, name: "Org 5" },
  ],
};
