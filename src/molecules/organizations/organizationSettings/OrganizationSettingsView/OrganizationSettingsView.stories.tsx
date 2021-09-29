import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultOrganization } from "services";
import OrganizationSettingsView from "./OrganizationSettingsView";

export default {
  title: "Molecules/Organizations/OrganizationSettingsView",
  component: OrganizationSettingsView,
} as ComponentMeta<typeof OrganizationSettingsView>;

const Template: ComponentStory<typeof OrganizationSettingsView> = (args) => (
  <OrganizationSettingsView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  organization: defaultOrganization,
  isLoading: false,
  isSuccess: false,
  onDeleteSubmit: () => void 0,
  onUpdateSubmit: () => void 0,
};
