import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import OrganizationSideBarView from "./OrganizationSideBarView";

export default {
  title: "Molecules/Organizations/OrganizationSideBarView",
  component: OrganizationSideBarView,
} as ComponentMeta<typeof OrganizationSideBarView>;

const Template: ComponentStory<typeof OrganizationSideBarView> = (args) => (
  <OrganizationSideBarView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  organizationId: 1,
  organizationRole: "mod",
  tab: null,
};
