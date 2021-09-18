import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CreateTemplateView from "./CreateTemplateView";

export default {
  title: "Molecules/Organizations/CreateTemplateView",
  component: CreateTemplateView,
} as ComponentMeta<typeof CreateTemplateView>;

const Template: ComponentStory<typeof CreateTemplateView> = (args) => (
  <CreateTemplateView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  isLoading: false,
  onSubmit: () => void 0,
};
