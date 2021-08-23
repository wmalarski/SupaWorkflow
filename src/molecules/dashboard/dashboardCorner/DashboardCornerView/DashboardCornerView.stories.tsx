import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import DashboardCornerView from "./DashboardCornerView";

export default {
  title: "Molecules/Dashboard/DashboardCornerView",
  component: DashboardCornerView,
} as ComponentMeta<typeof DashboardCornerView>;

const Template: ComponentStory<never> = () => <DashboardCornerView />;

export const Playground = Template.bind({});
