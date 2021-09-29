import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { defaultTeams } from "services";
import TemplateTeamsForm from "./TemplateTeamsForm";

export default {
  title: "Molecules/Editor/TemplateTeamsForm",
  component: TemplateTeamsForm,
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof TemplateTeamsForm>;

const Template: ComponentStory<typeof TemplateTeamsForm> = (args) => {
  const [selected, setSelected] = useState(args.selected);

  useEffect(() => setSelected(args.selected), [args.selected]);

  return (
    <TemplateTeamsForm {...args} selected={selected} onChange={setSelected} />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  teams: defaultTeams,
  selected: null,
};
