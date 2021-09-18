import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import NewOrganizationTeamView from "./NewOrganizationTeamView";

export default {
  title: "Molecules/Teams/NewOrganizationTeamView",
  component: NewOrganizationTeamView,
  argTypes: { onSubmit: { action: "onSubmit" } },
} as ComponentMeta<typeof NewOrganizationTeamView>;

const Template: ComponentStory<typeof NewOrganizationTeamView> = (args) => (
  <NewOrganizationTeamView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
