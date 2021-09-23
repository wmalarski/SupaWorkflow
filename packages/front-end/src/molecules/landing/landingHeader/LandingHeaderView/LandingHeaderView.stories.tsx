import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import LandingHeaderView from "./LandingHeaderView";

export default {
  title: "Molecules/Landing/LandingHeaderView",
  component: LandingHeaderView,
} as ComponentMeta<typeof LandingHeaderView>;

const Template: ComponentStory<never> = () => <LandingHeaderView />;

export const Playground = Template.bind({});
