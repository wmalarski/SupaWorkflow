import { ComponentMeta, ComponentStory } from "@storybook/react";
import { defaultOrganization } from "@supa-workflow/services";
import React from "react";
import DashboardSideBarView from "./DashboardSideBarView";

export default {
  title: "Molecules/Dashboard/DashboardSideBarView",
  component: DashboardSideBarView,
} as ComponentMeta<typeof DashboardSideBarView>;

const Template: ComponentStory<typeof DashboardSideBarView> = (args) => (
  <DashboardSideBarView {...args} />
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
