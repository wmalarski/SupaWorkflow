import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import NewTeamMemberView from "./NewTeamMemberView";

export default {
  title: "Molecules/Teams/NewTeamMemberView",
  component: NewTeamMemberView,
} as ComponentMeta<typeof NewTeamMemberView>;

const Template: ComponentStory<typeof NewTeamMemberView> = (args) => (
  <NewTeamMemberView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
