import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Alert from "./Alert";

export default {
  title: "Atoms/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
  children: "This is an error message!",
  variant: "red",
};
