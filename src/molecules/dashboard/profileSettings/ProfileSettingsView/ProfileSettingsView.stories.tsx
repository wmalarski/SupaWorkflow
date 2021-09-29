import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultProfile } from "services";
import ProfileSettingsView from "./ProfileSettingsView";

export default {
  title: "Molecules/Dashboard/ProfileSettingsView",
  component: ProfileSettingsView,
  argTypes: { onSubmit: { type: "action" } },
} as ComponentMeta<typeof ProfileSettingsView>;

const Template: ComponentStory<typeof ProfileSettingsView> = (args) => (
  <ProfileSettingsView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  isLoading: false,
  profile: defaultProfile,
};
