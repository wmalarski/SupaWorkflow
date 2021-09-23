import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";
import WorkflowCheckboxesForm from "./WorkflowCheckboxesForm";

export default {
  title: "Molecules/Editor/WorkflowCheckboxesForm",
  component: WorkflowCheckboxesForm,
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof WorkflowCheckboxesForm>;

const Template: ComponentStory<typeof WorkflowCheckboxesForm> = (args) => {
  const [state, setState] = useState(args.checked);

  useEffect(() => setState(args.checked), [args.checked]);

  return (
    <WorkflowCheckboxesForm
      {...args}
      checked={state}
      onChange={(value) => {
        setState(value);
        args.onChange(value);
      }}
    />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  checked: [],
  options: ["opt1", "opt2", "opt3"],
};
