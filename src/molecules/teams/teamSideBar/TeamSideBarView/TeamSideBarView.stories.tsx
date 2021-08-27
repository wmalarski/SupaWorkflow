import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TeamSideBarView from "./TeamSideBarView";

export default {
  title: "Molecules/Teams/TeamSideBarView",
  component: TeamSideBarView,
} as ComponentMeta<typeof TeamSideBarView>;

const Template: ComponentStory<typeof TeamSideBarView> = (args) => (
  <TeamSideBarView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
