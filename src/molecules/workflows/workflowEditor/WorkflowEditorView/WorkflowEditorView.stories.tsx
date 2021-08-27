import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import WorkflowEditorView from "./WorkflowEditorView";

export default {
  title: "Molecules/Workflows/WorkflowEditorView",
  component: WorkflowEditorView,
} as ComponentMeta<typeof WorkflowEditorView>;

const Template: ComponentStory<typeof WorkflowEditorView> = (args) => (
  <WorkflowEditorView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
