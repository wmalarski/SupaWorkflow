import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TemplateDetailsForm from "./TemplateDetailsForm";

export default {
  title: "Molecules/Templates/TemplateDetailsForm",
  component: TemplateDetailsForm,
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof TemplateDetailsForm>;

const Template: ComponentStory<typeof TemplateDetailsForm> = (args) => (
  <TemplateDetailsForm {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  description: "Description",
  title: "Title",
};
