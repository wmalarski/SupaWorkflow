import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TextField from "./TextField";

export default {
  title: "Atoms/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Primary = Template.bind({});
Primary.args = { value: "Hello" };
