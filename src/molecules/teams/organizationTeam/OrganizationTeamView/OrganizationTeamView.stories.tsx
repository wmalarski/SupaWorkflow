import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import OrganizationTeamView from "./OrganizationTeamView";

export default {
  title: "Molecules/Teams/OrganizationTeamView",
  component: OrganizationTeamView,
} as ComponentMeta<typeof OrganizationTeamView>;

const Template: ComponentStory<typeof OrganizationTeamView> = (args) => (
  <OrganizationTeamView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
