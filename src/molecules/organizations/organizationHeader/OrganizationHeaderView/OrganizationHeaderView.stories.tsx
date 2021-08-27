import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { OrganizationTab } from "../../../../utils";
import OrganizationHeaderView from "./OrganizationHeaderView";

export default {
  title: "Molecules/Organizations/OrganizationHeaderView",
  component: OrganizationHeaderView,
} as ComponentMeta<typeof OrganizationHeaderView>;

const Template: ComponentStory<typeof OrganizationHeaderView> = (args) => (
  <OrganizationHeaderView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  organizationId: 1,
  tab: OrganizationTab.members,
};
