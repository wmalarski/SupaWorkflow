import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Debug from "./Debug";

export default {
  title: "Atoms/Debug",
  component: Debug,
} as ComponentMeta<typeof Debug>;

const Template: ComponentStory<typeof Debug> = (args) => <Debug {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: { hello: "world" },
};
