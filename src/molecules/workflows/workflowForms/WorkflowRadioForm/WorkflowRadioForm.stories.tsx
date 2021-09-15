import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";
import WorkflowRadioForm from "./WorkflowRadioForm";

export default {
  title: "Molecules/Workflows/WorkflowRadioForm",
  component: WorkflowRadioForm,
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof WorkflowRadioForm>;

const Template: ComponentStory<typeof WorkflowRadioForm> = (args) => {
  const [state, setState] = useState(args.selected);

  useEffect(() => setState(args.selected), [args.selected]);

  return <WorkflowRadioForm {...args} selected={state} onChange={setState} />;
};

export const Playground = Template.bind({});
Playground.args = {
  selected: null,
  options: ["opt1", "opt2", "opt3"],
};
