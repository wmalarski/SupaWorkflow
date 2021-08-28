import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ContextsMock } from "../../../../tests/wrappers";
import OrganizationSideBarView from "./OrganizationSideBarView";

export default {
  title: "Molecules/Organizations/OrganizationSideBarView",
  component: OrganizationSideBarView,
} as ComponentMeta<typeof OrganizationSideBarView>;

const Template: ComponentStory<typeof OrganizationSideBarView> = (args) => (
  <ContextsMock>
    <OrganizationSideBarView {...args} />
  </ContextsMock>
);

export const Playground = Template.bind({});
