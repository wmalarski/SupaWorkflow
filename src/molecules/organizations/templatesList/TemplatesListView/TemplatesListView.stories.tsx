import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TemplatesListView from "./TemplatesListView";

export default {
  title: "Molecules/Templates/TemplatesListView",
  component: TemplatesListView,
} as ComponentMeta<typeof TemplatesListView>;

const Template: ComponentStory<typeof TemplatesListView> = (args) => (
  <TemplatesListView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
