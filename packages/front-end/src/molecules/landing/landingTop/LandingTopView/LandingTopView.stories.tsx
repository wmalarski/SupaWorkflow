import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import LandingTopView from "./LandingTopView";

export default {
  title: "Molecules/Landing/LandingTopView",
  component: LandingTopView,
} as ComponentMeta<typeof LandingTopView>;

const Template: ComponentStory<never> = () => <LandingTopView />;

export const Playground = Template.bind({});
