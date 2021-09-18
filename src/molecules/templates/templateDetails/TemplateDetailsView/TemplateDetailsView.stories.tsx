import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { defaultWorkflows } from "../../../../services";
import TemplateDetailsView from "./TemplateDetailsView";

export default {
  title: "Molecules/TemplateDetailsView",
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
