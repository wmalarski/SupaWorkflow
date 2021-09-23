import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  defaultMember,
  defaultOrganizationMember,
} from "@supa-workflow/services";
import React from "react";
import OrganizationMembersView from "./OrganizationMembersView";

export default {
  title: "Molecules/Organizations/OrganizationMembersView",
  component: OrganizationMembersView,
} as ComponentMeta<typeof OrganizationMembersView>;

const Template: ComponentStory<typeof OrganizationMembersView> = (args) => (
  <OrganizationMembersView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  page: 0,
  pageSize: 10,
  authorId: 1,
  isLoading: false,
  isUpdateLoading: false,
  currentMember: defaultOrganizationMember,
  members: {
    count: 4,
    entries: new Array(10).fill(0).map((_, index) => ({
      ...defaultMember,
      member_id: index,
    })),
  },
  onDeleteClick: () => void 0,
  onPageChange: () => void 0,
  onUpdateClick: () => void 0,
};
