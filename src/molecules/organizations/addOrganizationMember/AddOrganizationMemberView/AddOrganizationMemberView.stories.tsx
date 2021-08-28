import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import AddOrganizationMemberView from "./AddOrganizationMemberView";

export default {
  title: "Molecules/Organization/AddOrganizationMemberView",
  component: AddOrganizationMemberView,
  argTypes: { onSubmit: { type: "action" } },
} as ComponentMeta<typeof AddOrganizationMemberView>;

const Template: ComponentStory<typeof AddOrganizationMemberView> = (args) => (
  <AddOrganizationMemberView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  isLoading: false,
};
