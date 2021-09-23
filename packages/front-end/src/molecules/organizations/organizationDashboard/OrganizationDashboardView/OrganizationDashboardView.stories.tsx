import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import OrganizationDashboardView from "./OrganizationDashboardView";

export default {
  title: "Molecules/Organizations/OrganizationDashboardView",
  component: OrganizationDashboardView,
} as ComponentMeta<typeof OrganizationDashboardView>;

const Template: ComponentStory<typeof OrganizationDashboardView> = (args) => (
  <OrganizationDashboardView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
