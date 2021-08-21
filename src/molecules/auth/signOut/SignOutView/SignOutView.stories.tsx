import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SignOutView from "./SignOutView";

export default {
  title: "Molecules/Auth/SignOut/SignOutView",
  component: SignOutView,
  argTypes: {
    onSignOutClicked: { action: "onSignOutClicked" },
  },
} as ComponentMeta<typeof SignOutView>;

const Template: ComponentStory<typeof SignOutView> = (args) => (
  <SignOutView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  onSignOutClicked: () => null,
};
