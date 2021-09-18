import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import ProfileHeaderView from "./ProfileHeaderView";

export default {
  title: "Molecules/Common/ProfileHeaderView",
  component: ProfileHeaderView,
} as ComponentMeta<typeof ProfileHeaderView>;

const Template: ComponentStory<typeof ProfileHeaderView> = (args) => (
  <ProfileHeaderView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
