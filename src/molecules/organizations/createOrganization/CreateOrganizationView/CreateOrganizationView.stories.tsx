import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CreateOrganizationView from "./CreateOrganizationView";

export default {
  title: "Molecules/Organizations/CreateOrganizationView",
  component: CreateOrganizationView,
} as ComponentMeta<typeof CreateOrganizationView>;

const Template: ComponentStory<typeof CreateOrganizationView> = (args) => (
  <CreateOrganizationView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  isLoading: false,
  onSubmit: () => void 0,
};
