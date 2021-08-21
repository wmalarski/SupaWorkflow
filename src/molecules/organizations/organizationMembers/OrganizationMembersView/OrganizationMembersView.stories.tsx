import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import OrganizationMembersView from "./OrganizationMembersView";

export default {
  title: "Molecules/OrganizationMembersView",
  component: OrganizationMembersView,
} as ComponentMeta<typeof OrganizationMembersView>;

const Template: ComponentStory<typeof OrganizationMembersView> = (args) => (
  <OrganizationMembersView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
