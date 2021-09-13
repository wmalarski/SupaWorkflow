import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TemplateTargetForm from "./TemplateTargetForm";

export default {
  title: "Molecules/Templates/TemplateTargetForm",
  component: TemplateTargetForm,
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof TemplateTargetForm>;

const Template: ComponentStory<typeof TemplateTargetForm> = (args) => (
  <TemplateTargetForm {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  isTargetAll: true,
};
