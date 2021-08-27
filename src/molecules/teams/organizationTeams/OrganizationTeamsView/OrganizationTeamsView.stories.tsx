import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import OrganizationTeamsView from "./OrganizationTeamsView";

export default {
  title: "Molecules/Teams/OrganizationTeamsView",
  component: OrganizationTeamsView,
} as ComponentMeta<typeof OrganizationTeamsView>;

const Template: ComponentStory<typeof OrganizationTeamsView> = (args) => (
  <OrganizationTeamsView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
