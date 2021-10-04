import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { DashboardTab } from "utils";
import DashboardHeaderView from "./DashboardHeaderView";

export default {
  title: "Molecules/Dashboard/DashboardHeaderView",
  component: DashboardHeaderView,
  argTypes: {
    tab: {
      control: { type: "select", options: { ...DashboardTab, None: null } },
    },
  },
} as ComponentMeta<typeof DashboardHeaderView>;

const Template: ComponentStory<typeof DashboardHeaderView> = (args) => (
  <DashboardHeaderView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  tab: DashboardTab.profile,
};
