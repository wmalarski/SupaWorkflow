import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import AnonHeaderView from "./AnonHeaderView";

export default {
  title: "Molecules/Landing/AnonHeaderView",
  component: AnonHeaderView,
} as ComponentMeta<typeof AnonHeaderView>;

const Template: ComponentStory<never> = () => <AnonHeaderView />;

export const Playground = Template.bind({});
