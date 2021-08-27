import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TemplateTab } from "../../../../utils";
import TemplateHeaderView from "./TemplateHeaderView";

export default {
  title: "Molecules/Templates/TemplateHeaderView",
  component: TemplateHeaderView,
} as ComponentMeta<typeof TemplateHeaderView>;

const Template: ComponentStory<typeof TemplateHeaderView> = (args) => (
  <TemplateHeaderView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  organizationId: 1,
  tab: TemplateTab.edit,
  templateId: 1,
};
