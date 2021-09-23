import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TemplateSideBarView from "./TemplateSideBarView";

export default {
  title: "Molecules/Templates/TemplateSideBarView",
  component: TemplateSideBarView,
} as ComponentMeta<typeof TemplateSideBarView>;

const Template: ComponentStory<typeof TemplateSideBarView> = (args) => (
  <TemplateSideBarView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  organizationId: 1,
  templateId: 1,
};
