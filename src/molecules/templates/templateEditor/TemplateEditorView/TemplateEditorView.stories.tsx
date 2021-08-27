import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TemplateEditorView from "./TemplateEditorView";

export default {
  title: "Molecules/Templates/TemplateEditorView",
  component: TemplateEditorView,
} as ComponentMeta<typeof TemplateEditorView>;

const Template: ComponentStory<typeof TemplateEditorView> = (args) => (
  <TemplateEditorView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  messages: [],
  onDeleteClick: () => void 0,
  onMessageChange: () => void 0,
  templateId: 1,
};
