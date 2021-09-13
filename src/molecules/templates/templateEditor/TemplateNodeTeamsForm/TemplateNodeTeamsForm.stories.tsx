import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { defaultTeam } from "../../../../services";
import TemplateNodeTeamsForm from "./TemplateNodeTeamsForm";

export default {
  title: "Molecules/Templates/TemplateNodeTeamsForm",
  component: TemplateNodeTeamsForm,
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof TemplateNodeTeamsForm>;

const Template: ComponentStory<typeof TemplateNodeTeamsForm> = (args) => {
  const [selected, setSelected] = useState(args.selected);

  useEffect(() => setSelected(args.selected), [args.selected]);

  return (
    <TemplateNodeTeamsForm
      {...args}
      selected={selected}
      onChange={setSelected}
    />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  teams: Array(5)
    .fill(defaultTeam)
    .map((team, index) => ({
      ...team,
      id: index,
      name: `${team.name}-${index}`,
    })),
  selected: [1, 2],
};
