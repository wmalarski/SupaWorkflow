import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TeamHeaderView from "./TeamHeaderView";

export default {
  title: "Molecules/Teams/TeamHeaderView",
  component: TeamHeaderView,
} as ComponentMeta<typeof TeamHeaderView>;

const Template: ComponentStory<typeof TeamHeaderView> = (args) => (
  <TeamHeaderView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  organizationId: 1,
  teamId: 1,
};
