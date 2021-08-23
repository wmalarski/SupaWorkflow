import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import DashboardHeaderView from "./DashboardHeaderView";

export default {
  title: "Molecules/Dashboard/DashboardHeaderView",
  component: DashboardHeaderView,
} as ComponentMeta<typeof DashboardHeaderView>;

const Template: ComponentStory<typeof DashboardHeaderView> = (args) => (
  <DashboardHeaderView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  path: "/dashboard/3/template/5/new",
  route: "/dashboard/[organizationId]/template/[templateId]/new",
};
