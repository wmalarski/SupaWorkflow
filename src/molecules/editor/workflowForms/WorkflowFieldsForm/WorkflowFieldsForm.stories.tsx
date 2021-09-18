import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";
import WorkflowFieldsForm from "./WorkflowFieldsForm";

export default {
  title: "Molecules/Workflows/WorkflowFieldsForm",
  component: WorkflowFieldsForm,
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof WorkflowFieldsForm>;

const Template: ComponentStory<typeof WorkflowFieldsForm> = (args) => {
  const [state, setState] = useState(args.values);

  useEffect(() => setState(args.values), [args.values]);

  return (
    <WorkflowFieldsForm
      {...args}
      values={state}
      onChange={(value) => {
        setState(value);
        args.onChange(value);
      }}
    />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  fields: ["field1", "field2"],
  values: {},
};
