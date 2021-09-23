import { ComponentMeta, ComponentStory } from "@storybook/react";
import { defaultWorkflows } from "@supa-workflow/services";
import React from "react";
import TemplateDetailsView from "./TemplateDetailsView";

export default {
  title: "Molecules/Templates/TemplateDetailsView",
  component: TemplateDetailsView,
} as ComponentMeta<typeof TemplateDetailsView>;

const Template: ComponentStory<typeof TemplateDetailsView> = (args) => (
  <TemplateDetailsView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  onPageChange: () => void 0,
  page: 0,
  pageSize: 10,
  count: 5,
  isLoading: false,
  workflows: defaultWorkflows,
};
